import Style from "./NavigationBullets.module.css";
import Poster from "./Poster";

interface Props {
  posters: Poster[];
  currentPoster: number;
  onClick(clickedBullet: number): void;
}

const NavigationBullets = ({ posters, currentPoster, onClick }: Props) => {
  return (
    <ul className={Style.bullets}>
      {posters.map((_, index) => (
        <li
          onClick={() => onClick(index)}
          className={[
            Style.bullet,
            currentPoster === index && Style.selectedBullet,
          ].join(" ")}
        ></li>
      ))}
    </ul>
  );
};

export default NavigationBullets;
