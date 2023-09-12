from pathlib import Path
from selenium import webdriver
from selenium.webdriver.common.by import By
import re
from pprint import pprint
import os
import json
import requests
import threading
import time


def download_file(url, file_path):
    response = requests.get(url, stream=True)
    with open(file_path, 'wb') as file:
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                file.write(chunk)
    print("Download complete: ", file_path)


driver = webdriver.Edge()
driver.get("https://www.orderfast.com/en/fatiseg")

data = {}

categories = []

os.makedirs("categories")

threads = []

for i in range(len(driver.find_elements(By.CLASS_NAME, "icwzQh"))):
    element = driver.find_elements(By.CLASS_NAME, "icwzQh")[i]
    category = {}
    category["name"] = element.text.title().replace(
        "'", "").replace('"', "")  # get the category name
    category["thumbnail"] = []
    categoryPath = f"categories/{category['name']}"
    os.makedirs(categoryPath)  # create a folder for the category
    categoryThumbnailImagesPath = f"categories/{category['name']}/thumbnail"
    # create a folder for the thumbnail images of the category
    os.makedirs(categoryThumbnailImagesPath)

    categoryImages = list(map(lambda x: x.strip(",").strip(" "), re.split(
        r"\d+w", element.find_element(By.TAG_NAME, "img").get_attribute("srcset"))))[:4]

    for url, quality in zip(categoryImages, ["128", "256", "384", "640"]):
        imagePath = f"{categoryThumbnailImagesPath}/{quality}.jpeg"
        category["thumbnail"].append(imagePath)
        thread = threading.Thread(target=download_file, args=(url, imagePath))
        thread.start()
        threads.append(thread)

    element.click()
    # gets the images for each category
    items = []
    time.sleep(1)
    for j in range(len(driver.find_elements(By.CLASS_NAME, "icwzQh"))):
        itemElement = driver.find_elements(By.CLASS_NAME, "icwzQh")[j]
        item = {}
        itemData = itemElement.text.split("\n")  # get the item data
        item["name"] = itemData[0].title().replace("'", "").replace('"', "")
        item["price"] = int(itemData[-1].lower().replace("egp", ''))
        item["discount"] = float(itemData[1].lower().replace(
            "up to", '').replace(r"% off", ''))/100 if len(itemData) == 3 else 0
        item["description"] = "Tastes Nice"
        item["pickupOnly"] = category["name"].lower() == "tropical paradise"
        item["amountInStock"] = 100
        item["image"] = []
        itemPath = f"categories/{category['name']}/{item['name']}"
        os.makedirs(itemPath)  # create a folder to store item images

        itemImages = list(map(lambda x: x.strip(",").strip(" "), re.split(
            r"\d+w", itemElement.find_element(By.TAG_NAME, "img").get_attribute("srcset"))))[:4]
        for url, quality in zip(itemImages, ["128", "256", "384", "640"]):
            imagePath = f"{itemPath}/{quality}.jpeg"
            item["image"].append(imagePath)
            thread = threading.Thread(
                target=download_file, args=(url, imagePath))
            thread.start()
            threads.append(thread)

        itemElement.click()
        time.sleep(1)
        configurations = []
        for configurationElement in driver.find_elements(By.CLASS_NAME, "junuWZ")[:-1]:
            configurationData = configurationElement.text.split("\n")
            configuration = {}
            configuration["name"] = configurationData[0]
            configuration["required"] = "Required" in configurationData
            print(configuration)
            try:
                configurationData.remove("Required")
            except:
                continue
            least, most = sorted(
                map(int, re.findall('\d+', configurationData[1])))
            configuration["minAmount"] = least
            configuration["maxAmount"] = most
            configuration["selections"] = configurationData[2:]
            configurations.append(configuration)
        # presses the back button
        driver.find_element(
            By.XPATH, "/html/body/div[2]/div/div/div[2]/div[2]/div[1]/button").click()
        item["configurations"] = configurations
        items.append(item)
    # presses the back button
    driver.find_elements(By.CLASS_NAME, "iJGcRM")[-1].click()
    category["items"] = items
    categories.append(category)
    time.sleep(1)

for thread in threads:
    thread.join()


Path("categories.js").write_text("categories = " + json.dumps(categories))
