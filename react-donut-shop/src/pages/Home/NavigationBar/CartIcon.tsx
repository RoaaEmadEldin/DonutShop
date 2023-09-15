import { FaShoppingCart } from "react-icons/fa";
import Style from "./CartIcon.module.css";

interface Props {
  itemsCount: number;
  onClick(): void;
}
const CartIcon = ({ itemsCount, onClick }: Props) => {
  return (
    <span
      className={Style.cart}
      onClick={() => onClick()}
      data-cartCount={itemsCount}
    >
      <FaShoppingCart></FaShoppingCart>
    </span>
  );
};

export default CartIcon;
