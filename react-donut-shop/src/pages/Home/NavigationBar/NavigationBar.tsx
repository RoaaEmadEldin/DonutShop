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

interface Props {
  cartItems: CartItem[];
  showContext: boolean;
  onContextButtonClick(): void;
}

const NavigationBar = ({
  cartItems,
  showContext,
  onContextButtonClick,
}: Props) => {
  const [selectedMode, setSelectedMode] = useState(0);
  const calculateAmount = () => {
    let sum = 0;
    cartItems.map((item) => item.amount).forEach((el) => (sum += el));
    return sum;
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
            {showContext && (
              <div className={Style.contextMenuContainer}>
                <ContextMenu>
                  {selectedMode == 0 ? <PickupContext /> : <DeliveryContext />}
                </ContextMenu>
              </div>
            )}
          </div>
        </div>
        <div className={Style.rightSegment}>
          <div className={Style.actions}>
            <CartIcon
              itemsCount={calculateAmount()}
              onClick={() => console.log(cartItems)}
            />
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
