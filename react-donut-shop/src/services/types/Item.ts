import ItemConfiguration, { itemConfigurationCloner } from "./ItemConfguration";
import Cloneable from "../interfaces/Cloner";

export default interface Item {
  name: string;
  price: number;
  discount: number;
  description: string;
  pickupOnly: boolean;
  amountInStock: number;
  image: string[4];
  configurations: ItemConfiguration[];
}

class ItemCloner implements Cloneable<Item> {
  clone(entity: Item): Item {
    return {
      ...entity,
      configurations: entity.configurations.map((itemConfiguration) =>
        itemConfigurationCloner.clone(itemConfiguration)
      ),
    };
  }
}

export const itemCloner = new ItemCloner();
