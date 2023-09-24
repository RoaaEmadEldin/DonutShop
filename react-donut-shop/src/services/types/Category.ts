import Cloneable from "../interfaces/Cloner";
import Item, { itemCloner } from "./Item";

export default interface Category {
  name: string;
  thumbnail: string[4];
  items: Item[];
}

class CategoryCloner implements Cloneable<Category> {
  clone(entity: Category): Category {
    return {
      ...entity,
      items: entity.items.map((item) => itemCloner.clone(item)),
    };
  }
}

export const categoryCloner = new CategoryCloner();
