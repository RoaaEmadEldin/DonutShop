import CartItem, { cartItemCloner } from "./types/CartItem";
class Cart {
  private _cartItems: CartItem[] = [];
  public get cartItems(): CartItem[] {
    return this._getCartClone(this._cartItems);
  }
  constructor(items: CartItem[]) {
    this._cartItems = this._getCartClone(this._removeEmptyCartItems(items));
  }

  _getCartClone(items: CartItem[]) {
    return items.map((it) => cartItemCloner.clone(it));
  }
  _removeEmptyCartItems(items: CartItem[]) {
    return items.filter((it) => it.amount > 0);
  }
  findCartItem(itemID: string) {
    return this._cartItems.find((cartItem) => cartItem.itemID === itemID);
  }

  addCartItem(itemID: string, amount: number) {
    const cartItem = this.findCartItem(itemID);
    if (cartItem) {
      cartItem.amount = amount;
    } else {
      this._cartItems.push({ itemID: itemID, amount: amount });
    }
    this._cartItems = this._removeEmptyCartItems(this._cartItems);
  }
}

export default Cart;
