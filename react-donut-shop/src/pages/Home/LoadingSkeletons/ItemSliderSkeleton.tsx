import CardSkeleton from "../../../common/LoadingSkeletons/CardSkeleton";
import Style from "./ItemSliderSkeleton.module.css";

interface Props {
  cardsAmount: number;
}

const ItemSliderSkeleton = ({ cardsAmount }: Props) => {
  return (
    <article className={Style.itemSlider}>
      <div className={Style.labelContainer}></div>
      <div className={Style.items}>
        {Array(cardsAmount)
          .fill(0)
          .map(() => (
            <CardSkeleton />
          ))}
      </div>
    </article>
  );
};

export default ItemSliderSkeleton;
