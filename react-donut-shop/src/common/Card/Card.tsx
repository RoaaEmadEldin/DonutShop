import Style from "./Card.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Like from "./Like";

interface Props {
  image: string;
  name: string;
  description: string;
  liked: boolean;
  price: number;
}
const Card = ({ image, name, description, liked, price }: Props) => {
  const handleLike = () => {
    console.log(`${name} liked button clicked.`);
  };
  return (
    <article className={Style.card}>
      <div className={Style.itemImage}>
        <img src={image} alt="" />
      </div>
      <div className={Style.itemContent}>
        <div className={Style.topContent}>
          <div className={Style.itemInfo}>
            <p className={Style.itemName}>{name}</p>
            <p className={Style.itemDescription}>{description}</p>
          </div>
          <Like liked={liked} onClick={handleLike} />
        </div>
        <div className={Style.bottomContent}>
          <div className={Style.addToCartBtn}>
            <button>
              <AiOutlinePlusCircle />
              <span>ADD TO CART</span>
            </button>
          </div>
          <div className={Style.separator}></div>
          <div className={Style.priceContainer}>
            <sup className={Style.currency}>EGP</sup>
            <span className={Style.price}>{price}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
