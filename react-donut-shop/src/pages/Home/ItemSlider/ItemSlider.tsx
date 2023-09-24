import Card from "../../../common/Card";
import Item from "../../../services/types/Item";
import Style from "./ItemSlider.module.css";

interface Props {
  label: string;
  items: Item[];
  RESOUCRE_PATH: string;
  onAmountChange(itemID: string, amountInCart: number): void;
}

const ItemSlider = ({ label, items, RESOUCRE_PATH, onAmountChange }: Props) => {
  return (
    <article className={Style.itemSlider}>
      <div className={Style.labelContainer}>
        <p className={Style.label}>{label}</p>
      </div>
      <div className={Style.items}>
        {items.map((item, index) => (
          <Card
            key={index}
            image={RESOUCRE_PATH + item.image[3]}
            name={item.name}
            description={item.description}
            liked={false}
            price={item.price}
            onAmountChange={onAmountChange}
          />
        ))}
      </div>
    </article>
  );
};

export default ItemSlider;
