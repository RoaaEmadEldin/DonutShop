import { useEffect, useState } from "react";
import categoriesService from "../services/categories-service";
import Category from "../services/types/Category";

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const service = categoriesService.getAll();
    service.request
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    return () => {
      service.cancel();
    };
  }, []);
  return { categories, error, loading, setCategories, setError };
};

export default useCategories;
