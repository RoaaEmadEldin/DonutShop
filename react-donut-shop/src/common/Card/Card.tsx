import VerticalStyle from "./VerticalCard.module.css";
import HorizontalStyle from "./HorizontalCard.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Like from "./Like";
import AmountControl from "./AmountControl";

interface Props {
  image: string;
  name: string;
  description: string;
  liked: boolean;
  price: number;
  amountInCart: number;
  onAmountChange(itemID: string, amountInCart: number): void;
  options?: {
    horizontal?: boolean;
    noDescription?: boolean;
  };
}
const Card = ({
  image,
  name,
  description,
  liked,
  price,
  amountInCart,
  onAmountChange,
  options = {},
}: Props) => {
  const { horizontal = false, noDescription = false } = options;
  const Style = horizontal ? HorizontalStyle : VerticalStyle;
  const handleLike = () => {
    console.log(`${name} liked button clicked.`);
  };
  const handleAmountChange = (newAmount: number) => {
    onAmountChange(name, newAmount);
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
            {!noDescription && (
              <p className={Style.itemDescription}>{description}</p>
            )}
          </div>
          <Like liked={liked} onClick={handleLike} />
        </div>
        <div className={Style.bottomContent}>
          <div className={Style.addToCartBtn}>
            {amountInCart === 0 && (
              <button onClick={() => handleAmountChange(1)}>
                <AiOutlinePlusCircle />
                <span>ADD TO CART</span>
              </button>
            )}
            {amountInCart !== 0 && (
              <AmountControl
                onChange={(newAmount: number) => handleAmountChange(newAmount)}
              >
                {amountInCart}
              </AmountControl>
            )}
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
