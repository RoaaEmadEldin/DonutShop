import Card from "../../../common/Card";
import { CardProps } from "../../../common/Card/Card";
import CartItem from "../../../services/types/CartItem";
import Item from "../../../services/types/Item";
import { RESOUCRE_PATH } from "../Home";
import Style from "./ItemSlider.module.css";

interface Props extends CardProps {
  label: string;
  items: Item[];
  cartItems: CartItem[];
  likedItems: string[];
}

const ItemSlider = ({
  label,
  items,
  cartItems,
  likedItems,
  onAmountChange,
  onItemLike,
}: Props) => {
  return (
    <article className={Style.itemSlider}>
      <div className={Style.labelContainer}>
        <p className={Style.label}>{label}</p>
      </div>
      <div className={Style.items}>
        {items.map((item, index) => (
          <Card
            key={index}
            image={RESOUCRE_PATH + item.image[3]}
            name={item.name}
            description={item.description}
            liked={likedItems.includes(item.name)}
            price={item.price}
            amountInCart={
              cartItems.find((cartItem) => cartItem.itemID === item.name)
                ?.amount || 0
            }
            onAmountChange={onAmountChange}
            onItemLike={onItemLike}
          />
        ))}
      </div>
    </article>
  );
};

export default ItemSlider;
