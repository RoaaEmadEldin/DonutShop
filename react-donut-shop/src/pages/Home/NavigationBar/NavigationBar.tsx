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
const NavigationBar = () => {
  const [selectedMode, setSelectedMode] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
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
                onClick={() => setSelectedMode(0)}
              >
                Self-Pickup
              </ContextButton>
              <ContextButton
                inactiveImage={DeliveryInactive}
                activeImage={DeliveryActive}
                selected={selectedMode == 1}
                onClick={() => setSelectedMode(1)}
              >
                Delivery
              </ContextButton>
            </div>
            <span className={Style.separator}></span>
            <Link to="/login" className={Style.menuBtn}>
              <img src={Menu} alt="menu-photo" />
              <span>Menu</span>
            </Link>
          </div>
        </div>
        <div className={Style.rightSegment}>
          <div className={Style.actions}>
            <CartIcon
              itemsCount={itemsCount}
              onClick={() => setItemsCount((prev) => prev + 1)}
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
