import useCategories from "../../hooks/useCategories";
import { baseURL } from "../../services/categories-service";
import Style from "./Home.module.css";
const Home = () => {
  const { categories, error, loading, setCategories, setError } =
    useCategories();
  return (
    <>
      {loading && (
        <div className={Style.spinner}>
          <div className="spinner-border text-primary"></div>
        </div>
      )}
      {!loading && (
        <div>
          {categories.map((category) => (
            <article className={Style.categoryContainer}>
              <p>{category.name}</p>
              <article className={Style.imagesContainer}>
                {category.items.map((item) => (
                  <div className={Style.imageContainer}>
                    <img src={baseURL + item.image[3]} />
                  </div>
                ))}
              </article>
            </article>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
