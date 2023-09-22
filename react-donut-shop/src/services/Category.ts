export default interface Category {
  name: string;
  thumbnail: string[4];
  items: Item[];
}

export interface Item {
  name: string;
  price: number;
  discount: number;
  description: string;
  pickupOnly: boolean;
  amountInStock: number;
  image: string[4];
  configurations: ItemConfiguration[];
}

export interface ItemConfiguration {
  name: string;
  required: boolean;
  minAmount: number;
  maxAmount: number;
  selections: string[];
}
