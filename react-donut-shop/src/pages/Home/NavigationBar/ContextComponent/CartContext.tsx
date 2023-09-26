import { Link } from "react-router-dom";
import Card from "../../../../common/Card/";
import CartItem from "../../../../services/types/CartItem";
import Category from "../../../../services/types/Category";
import { RESOUCRE_PATH } from "../../Home";
import Style from "./CartContext.module.css";

interface Props {
  categories: Category[];
  cartItems: CartItem[];
  onAmountChange(itemID: string, amountInCart: number): void;
}
const CartContext = ({ categories, cartItems, onAmountChange }: Props) => {
  const allItems = categories.map((category) => category.items).flat();
  const items = cartItems.map((cartItem) => {
    return {
      item: allItems.find((item) => cartItem.itemID === item.name),
      amount: cartItem.amount,
    };
  });
  return (
    <article className={Style.wrapper}>
      <div className={Style.viewAllItems}>
        <Link className={Style.viewAllBtn} to={"/login"}>
          View All
        </Link>
      </div>
      <div className={Style.itemsWrapper}>
        <div className={Style.cartItemsContainer}>
          {items.map(
            (item, index) =>
              item.item && (
                <Card
                  key={index}
                  image={RESOUCRE_PATH + item.item.image[3]}
                  name={item.item.name}
                  description={item.item.description}
                  liked={false}
                  price={item.item.price}
                  amountInCart={item.amount}
                  onAmountChange={onAmountChange}
                  options={{ horizontal: true, noDescription: true }}
                />
              )
          )}
        </div>
      </div>
      <div className={Style.checkoutBtnContainer}>
        <Link className={Style.checkoutBtn} to={"/login"}>
          Check Out
        </Link>
      </div>
    </article>
  );
};

export default CartContext;
