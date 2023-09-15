import useCategories from "../../hooks/useCategories";
import NavigationBar from "./NavigationBar/NavigationBar";
const Home = () => {
  const { categories, error, loading, setCategories, setError } =
    useCategories();
  return (
    <>
      <NavigationBar />
    </>
  );
};

export default Home;
