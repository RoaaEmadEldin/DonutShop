import useCategories from "../../hooks/useCategories";
import useImages from "../../hooks/useImages";
import NavigationBar from "./NavigationBar";
import ImageSlider from "./ImageSlider";
import Style from "./Home.module.css";
import ImageSliderSkeleton from "./LoadingSkeletons/ImageSliderSkeleton";
import Card from "../../common/Card";

const RESOUCRE_PATH = "../../src/assets/";

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
          {categories.map((category, categoryIndex) =>
            category.items.map((item, itemIndex) => (
              <Card
                key={`${categoryIndex} ${itemIndex}`}
                image={RESOUCRE_PATH + item.image[3]}
                name={item.name}
                description={item.description}
                liked={false}
                price={item.price}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
