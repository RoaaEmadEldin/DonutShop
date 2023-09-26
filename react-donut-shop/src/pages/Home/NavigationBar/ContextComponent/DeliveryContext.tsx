import Map from "../Map";
import Style from "./DeliveryContext.module.css";
import useLocation from "../../../../hooks/useLocation";

const DeliveryContext = () => {
  const coords = useLocation();
  return (
    <article className={Style.deliveryContext}>
      <Map coords={coords} />
      <form action="" className={Style.formContainer}>
        <input
          type="text"
          className={Style.input}
          placeholder="Enter Address"
        />
        <div>
          <button type="submit" className={Style.submitBtn}>
            SAVE
          </button>
        </div>
      </form>
    </article>
  );
};

export default DeliveryContext;
