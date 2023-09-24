import { useState } from "react";
import Cart from "../services/Cart";
import CartItem from "../services/types/CartItem";

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cart = new Cart(cartItems);

  return { cart, cartItems, setCartItems };
};

export default useCart;
