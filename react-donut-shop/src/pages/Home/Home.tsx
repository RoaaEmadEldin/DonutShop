import useCategories from "../../hooks/useCategories";
import useImages from "../../hooks/useImages";
import NavigationBar from "./NavigationBar";
import ImageSlider from "./ImageSlider";
import Style from "./Home.module.css";
import ImageSliderSkeleton from "./LoadingSkeletons/ImageSliderSkeleton";
import ItemSlider from "./ItemSlider";
import ItemSliderSkeleton from "./LoadingSkeletons/ItemSliderSkeleton";
import { useState } from "react";
import { Item } from "../../services/Category";

const RESOUCRE_PATH = "../../src/assets/";

interface CartItem {
  item: Item;
  amount: number;
}

const Home = () => {
  const { categories, error, loading, setCategories, setError } =
    useCategories();

  const posters = categories.map((category) => {
    return {
      title: category.name,
      image: RESOUCRE_PATH + category.thumbnail[3],
    };
  });
  const postersLoading = useImages(posters.map((poster) => poster.image));

  // const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // const handleItemChange = (itemName: string, amount: number) => {
  //   if (cartItems.find((cartItem) => cartItem.item.name === itemName)){

  //   }
  // };

  return (
    <>
      <main className={Style.page}>
        <header className={[Style.header, Style.pad].join(" ")}>
          <NavigationBar />
        </header>
        <section className={[Style.slider, Style.pad].join(" ")}>
          {(loading || postersLoading) && <ImageSliderSkeleton />}
          {!loading && !postersLoading && <ImageSlider posters={posters} />}
        </section>
        <section className={[Style.itemSlider, Style.pad].join(" ")}>
          {loading && <ItemSliderSkeleton cardsAmount={6} />}
          {!loading && (
            <ItemSlider
              label="Doughnuts"
              items={categories[4].items.slice(8, 18)}
              // cartItems={cartItems}
              // onChange={() => handleItemChange(itemName, amount)}
              RESOUCRE_PATH={RESOUCRE_PATH}
            />
          )}
        </section>
        <section className={[Style.itemSlider, Style.pad].join(" ")}>
          {loading && <ItemSliderSkeleton cardsAmount={3} />}
          {!loading && (
            <ItemSlider
              label="ShareBox"
              items={categories[1].items}
              // cartItems={cartItems}
              // onChange={() => handleItemChange(itemName, amount)}
              RESOUCRE_PATH={RESOUCRE_PATH}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
