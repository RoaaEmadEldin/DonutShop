import useCategories from "../../hooks/useCategories";
import NavigationBar from "./NavigationBar";
import ImageSlider from "./ImageSlider";
import Style from "./Home.module.css";
const Home = () => {
  const { categories, error, loading, setCategories, setError } =
    useCategories();

  const posters = categories.map((category) => {
    return { title: category.name, image: category.thumbnail[3] };
  });
  return (
    <>
      <header className={[Style.header, Style.pad].join(" ")}>
        <NavigationBar />
      </header>
      {!loading && (
        <section className={[Style.slider, Style.pad].join(" ")}>
          <ImageSlider posters={posters} />
        </section>
      )}
    </>
  );
};

export default Home;
