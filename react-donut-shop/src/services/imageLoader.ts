class ImageLoader {
  load(images: string[]) {
    const imagePromises = images.map(
      (image) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        })
    );

    return Promise.allSettled(imagePromises);
  }
}

export default new ImageLoader();
