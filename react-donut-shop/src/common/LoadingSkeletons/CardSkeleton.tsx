import Style from "./CardSkeleton.module.css";

const CardSkeleton = () => {
  return (
    <article className={Style.card}>
      <div className={Style.itemImage}></div>
      <div className={Style.itemContent}>
        <div className={Style.itemInfo}>
          <div className={Style.itemName}></div>
          <div className={Style.itemDescription}></div>
        </div>
      </div>
    </article>
  );
};

export default CardSkeleton;
