import Cloneable from "../interfaces/Cloner";

export default interface ItemConfiguration {
  name: string;
  required: boolean;
  minAmount: number;
  maxAmount: number;
  selections: string[];
}

class ItemConfigurationCloner implements Cloneable<ItemConfiguration> {
  clone(entity: ItemConfiguration): ItemConfiguration {
    return { ...entity, selections: [...entity.selections] };
  }
}

export const itemConfigurationCloner = new ItemConfigurationCloner();
