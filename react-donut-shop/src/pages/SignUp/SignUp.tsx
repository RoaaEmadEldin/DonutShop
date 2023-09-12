import Style from "./SignUp.module.css";

const SignUp = () => {
  return (
    <>
      <div className={Style.parentContainer}>
        <div className={Style.backgroundImageContainer}></div>
        <div className={Style.formContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288 1440"
            className={Style.wave}
          >
            <path d="m0,1440l42.7-26.7c42.3-26.6,128.3-80.3,138.6-133.3,10.7-53.3-53.3-107-80-160-26.3-53.3-16.3-107,5.4-160,21.3-53.3,53.3-107,48-160-5.7-53.3-47.7-107-32-160,16.3-53.3,90.3-107,96-160,5.3-53.3-58.7-107-74.7-160-16-53.3,16-107,21.3-160,5.7-53.3-16.3-107-26.6-133L128,0h160v1440H0Z" />
          </svg>
          <form action="" className={Style.form}>
            <p>Your Content Here</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
