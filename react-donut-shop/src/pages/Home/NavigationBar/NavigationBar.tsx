import Logo from "../../../assets/main/logo.png";
import StoreActive from "../../../assets/main/store-active.svg";
import StoreInactive from "../../../assets/main/store-inactive.svg";
import DeliveryActive from "../../../assets/main/delivery-active.svg";
import DeliveryInactive from "../../../assets/main/delivery-inactive.svg";
import Menu from "../../../assets/main/menu.svg";
import { useState } from "react";
import ContextButton from "./ContextButton";
import { Link } from "react-router-dom";
import Style from "./NavigationBar.module.css";
import CartIcon from "./CartIcon";
import CartItem from "../../../services/types/CartItem";
import ContextMenu from "./ContextComponent/ContextMenu";
import DeliveryContext from "./ContextComponent/DeliveryContext";
import PickupContext from "./ContextComponent/PickupContext";
import Category from "../../../services/types/Category";
import CartContext from "./ContextComponent/CartContext";
import { CardProps } from "../../../common/Card/Card";

interface Props extends CardProps {
  categories: Category[];
  cartItems: CartItem[];
  likedItems: string[];
  showContext: boolean;
  onContextButtonClick(): void;
}

enum Contexts {
  PICKUP,
  DELIVERY,
  CART,
}

const NavigationBar = ({
  categories,
  cartItems,
  likedItems,
  showContext,
  onContextButtonClick,
  onAmountChange,
  onItemLike,
}: Props) => {
  const [selectedMode, setSelectedMode] = useState<0 | 1>(0);
  const [contexts, setContexts] = useState([true, false, false]);
  const calculateAmount = () => {
    let sum = 0;
    cartItems.map((item) => item.amount).forEach((el) => (sum += el));
    return sum;
  };
  const selectContext = (context: Contexts) => {
    const newContexts = new Array(contexts.length).fill(false);
    newContexts[context] = true;
    setContexts(newContexts);
  };
  return (
    <>
      <nav className={Style.navigation}>
        <div className={Style.leftSegment}>
          <div className={Style.logoContainer}>
            <img src={Logo} alt="Fatis Logo" />
          </div>

          <div className={Style.buttonsContainer}>
            <div className={Style.orderBtns}>
              <ContextButton
                inactiveImage={StoreInactive}
                activeImage={StoreActive}
                selected={selectedMode == 0}
                onClick={() => {
                  setSelectedMode(0);
                  selectContext(Contexts.PICKUP);
                  onContextButtonClick();
                }}
              >
                Self-Pickup
              </ContextButton>
              <ContextButton
                inactiveImage={DeliveryInactive}
                activeImage={DeliveryActive}
                selected={selectedMode == 1}
                onClick={() => {
                  setSelectedMode(1);
                  selectContext(Contexts.DELIVERY);
                  onContextButtonClick();
                }}
              >
                Delivery
              </ContextButton>
            </div>
            <span className={Style.separator}></span>
            <Link to="/login" className={Style.menuBtn}>
              <img src={Menu} alt="menu-photo" />
              <span>Menu</span>
            </Link>
            {showContext &&
              (contexts[Contexts.PICKUP] || contexts[Contexts.DELIVERY]) && (
                <div className={Style.contextMenuContainer}>
                  <ContextMenu>
                    {contexts[Contexts.PICKUP] && <PickupContext />}
                    {contexts[Contexts.DELIVERY] && <DeliveryContext />}
                  </ContextMenu>
                </div>
              )}
          </div>
        </div>
        <div className={Style.rightSegment}>
          <div className={Style.actions}>
            <div className={Style.cartIconContainer}>
              <CartIcon
                itemsCount={calculateAmount()}
                onClick={() => {
                  if (!cartItems.length) return;
                  selectContext(Contexts.CART);
                  onContextButtonClick();
                }}
              />
              {showContext && contexts[Contexts.CART] && (
                <div className={Style.cartContextMenuContainer}>
                  <ContextMenu>
                    <CartContext
                      categories={categories}
                      cartItems={cartItems}
                      likedItems={likedItems}
                      onAmountChange={onAmountChange}
                      onItemLike={onItemLike}
                    />
                  </ContextMenu>
                </div>
              )}
            </div>
            <div>
              <Link to="/login" className={Style.signInBtn}>
                <span>SIGN IN</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
