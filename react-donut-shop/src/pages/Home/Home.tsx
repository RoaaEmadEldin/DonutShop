import useCategories from "../../hooks/useCategories";
import useImages from "../../hooks/useImages";
import NavigationBar from "./NavigationBar";
import ImageSlider from "./ImageSlider";
import Style from "./Home.module.css";
import ImageSliderSkeleton from "./LoadingSkeletons/ImageSliderSkeleton";
import ItemSlider from "./ItemSlider";
import ItemSliderSkeleton from "./LoadingSkeletons/ItemSliderSkeleton";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import About from "./About";
import Footer from "./Footer";

export const RESOUCRE_PATH = "/src/assets/";

const Home = () => {
  const { categories, error, loading, setCategories, setError } =
    useCategories();
  const { cart, cartItems, setCartItems } = useCart();
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [showContext, setShowContext] = useState(false);

  const posters = categories.map((category) => {
    return {
      title: category.name,
      image: RESOUCRE_PATH + category.thumbnail[3],
    };
  });

  const postersLoading = useImages(posters.map((poster) => poster.image));

  const onAmountChange = (itemID: string, amountInCart: number) => {
    cart.addCartItem(itemID, amountInCart);
    setCartItems(cart.cartItems);
  };

  const handleContextButtonClick = () => setShowContext(true);

  const handleItemLike = (itemID: string) => {
    if (!likedItems.includes(itemID)) setLikedItems([...likedItems, itemID]);
    else setLikedItems(likedItems.filter((item) => item !== itemID));
  };

  return (
    <>
      <main className={Style.page}>
        <header className={[Style.header, Style.pad].join(" ")}>
          <NavigationBar
            categories={categories}
            cartItems={cartItems}
            likedItems={likedItems}
            showContext={showContext}
            onContextButtonClick={handleContextButtonClick}
            onAmountChange={onAmountChange}
            onItemLike={handleItemLike}
          />
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
              likedItems={likedItems}
              cartItems={cartItems}
              onAmountChange={onAmountChange}
              onItemLike={handleItemLike}
            />
          )}
        </section>
        <section className={[Style.itemSlider, Style.pad].join(" ")}>
          {loading && <ItemSliderSkeleton cardsAmount={3} />}
          {!loading && (
            <ItemSlider
              label="ShareBox"
              items={categories[1].items}
              likedItems={likedItems}
              cartItems={cartItems}
              onAmountChange={onAmountChange}
              onItemLike={handleItemLike}
            />
          )}
        </section>
        <div className={[Style.separator, Style.pad].join(" ")}>
          <span></span>
        </div>
        <section className={[Style.about, Style.pad].join(" ")}>
          <About />
        </section>
        <footer className={[Style.footer, Style.pad].join(" ")}>
          <Footer />
        </footer>
        {showContext && (
          <div
            className={Style.overlay}
            onClick={() => setShowContext(false)}
          ></div>
        )}
      </main>
    </>
  );
};

export default Home;
