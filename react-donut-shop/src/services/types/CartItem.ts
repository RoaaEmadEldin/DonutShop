import Cloneable from "../interfaces/Cloner";

export default interface CartItem {
  itemID: string;
  amount: number;
}

class CartItemCloner implements Cloneable<CartItem> {
  clone(entity: CartItem): CartItem {
    return { ...entity };
  }
}

export const cartItemCloner = new CartItemCloner();
