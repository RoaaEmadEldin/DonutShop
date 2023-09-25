import Style from "./PickupContext.module.css";

const PickupContext = () => {
  return (
    <>
      <form className={Style.form} action="">
        <div className={Style.ddlsContainer}>
          <div className={Style.branchContainer}>
            <label htmlFor="branch">Branch</label>
            <select id="branch">
              <option value="0">Maadi</option>
              <option value="1">Mokkatam</option>
              <option value="2">Madinet Nasr</option>
              <option value="3">Tagamo3</option>
            </select>
          </div>
          <div className={Style.pickupDateContainer}>
            <label htmlFor="pickupDate">Pickup Date</label>
            <input id="pickupDate" type="datetime-local" />
          </div>
        </div>
        <div className={Style.requests}>
          <label htmlFor="requests">Pickup Requests</label>
          <textarea
            id="requests"
            placeholder="Specify Your Order Requests Here"
          ></textarea>
        </div>
        <div className={Style.submitBtnContainer}>
          <button className={Style.submitBtn} type="submit">
            SAVE
          </button>
        </div>
      </form>
    </>
  );
};

export default PickupContext;
