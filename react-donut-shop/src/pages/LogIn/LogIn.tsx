import Style from "./Login.module.css";
import Logo from "../../assets/main/logo.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className={Style.parentContainer}>
        <div className={Style.backgroundImageContainer}></div>
        <div className={Style.contentContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288 1440"
            className={Style.wave}
          >
            <path d="m0,1440l42.7-26.7c42.3-26.6,128.3-80.3,138.6-133.3,10.7-53.3-53.3-107-80-160-26.3-53.3-16.3-107,5.4-160,21.3-53.3,53.3-107,48-160-5.7-53.3-47.7-107-32-160,16.3-53.3,90.3-107,96-160,5.3-53.3-58.7-107-74.7-160-16-53.3,16-107,21.3-160,5.7-53.3-16.3-107-26.6-133L128,0h160v1440H0Z" />
          </svg>

          <form className={Style.content}>
            <div className={Style.logoContainer}>
              <a href="/home">
                <img className={Style.logo} src={Logo} alt="Logo" />
              </a>
            </div>

            <div className={Style.title}>
              <p>Welcome Back!</p>
            </div>

            <div className={Style.container}>
              <label className={Style.labels}>Email or Username</label>
              <input
                className={Style.input}
                type="text"
                placeholder="Enter your email or username"
                required
              ></input>

              <div>
                <label className={Style.labels}>Password</label>
                <p className={Style.forgetPass}>
                  <a>Forgot Password?</a>
                </p>
              </div>
              
              <div className="input-group mb-3">  
                <input
                  className={Style.inputPass}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                ></input>
              
                <button
                  className={Style.showPassBtn}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              
              <Link to={"/home"} style={{ textDecoration: "none" }}>
                <div className={Style.loginContainer}>
                  <button type="submit" id={Style.loginButton}>
                    Login
                  </button>
                </div>
              </Link>
              <p id={Style.signupContainer}>
                Don't Have an Account?
                <Link to={"/signup"} id={Style.signupLink}>
                  Sign Up
                </Link>
              </p>

              <div className={Style.horizontalLine}>
                <span className={Style.lineText}>Or Login With</span>
              </div>

              <div className={Style.googleLogoContainer}>
                <Link to={"/home"}>
                  <img
                    className={Style.googleLogo}
                    src="./src/pages/LogIn/google-logo.png"
                  ></img>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
