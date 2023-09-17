import { useEffect, useState } from "react";
import Style from "./ImageSlider.module.css";
import SlideShow from "./SlideShow";
import NavigationBullets from "./NavigationBullets";
import Poster from "./Poster";

interface Props {
  posters: Poster[];
}

const ImageSlider = ({ posters }: Props) => {
  const [currentPoster, setCurrentPoster] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentPoster((prev) => (prev + 1) % posters.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [currentPoster]);
  return (
    <article className={Style.imageSlider}>
      <SlideShow posters={posters} currentPoster={currentPoster} />
      <div className={Style.bulletsContainer}>
        <NavigationBullets
          posters={posters}
          currentPoster={currentPoster}
          onClick={(clickedBullet: number) => setCurrentPoster(clickedBullet)}
        />
      </div>
    </article>
  );
};

export default ImageSlider;
