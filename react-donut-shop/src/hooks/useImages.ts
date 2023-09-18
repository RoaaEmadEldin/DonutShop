import { useEffect, useState } from "react";
import imageLoader from "../services/imageLoader";

const useImages = (images: string[]) => {
  const [postersLoading, setPostersLoading] = useState(true);
  useEffect(() => {
    imageLoader
      .load(images)
      .then(() => {
        setPostersLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return postersLoading;
};

export default useImages;
