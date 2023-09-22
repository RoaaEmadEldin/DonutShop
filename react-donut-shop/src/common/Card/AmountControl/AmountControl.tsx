import Style from "./AmountControl.module.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
interface Props {
  children: number;
  onChange(newAmount: number): void;
}

const AmountControl = ({ children, onChange }: Props) => {
  return (
    <article className={Style.control}>
      <div
        className={Style.minus}
        onClick={() => onChange(children - 1 > 0 ? children - 1 : 0)}
      >
        <AiFillMinusCircle />
      </div>
      <span className={Style.amount}>{children}</span>
      <div className={Style.plus} onClick={() => onChange(children + 1)}>
        <AiFillPlusCircle />
      </div>
    </article>
  );
};

export default AmountControl;
