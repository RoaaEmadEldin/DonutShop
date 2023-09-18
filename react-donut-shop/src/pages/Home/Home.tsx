import useCategories from "../../hooks/useCategories";
import useImages from "../../hooks/useImages";
import NavigationBar from "./NavigationBar";
import ImageSlider from "./ImageSlider";
import Style from "./Home.module.css";
import ImageSliderSkeleton from "./LoadingSkeletons/ImageSliderSkeleton";

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
      </main>
    </>
  );
};

export default Home;
