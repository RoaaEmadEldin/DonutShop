import Style from "./SignUp.module.css";
import React, { useState } from "react";
import Logo from "../../assets/main/logo.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const isUsernameValid = (username: string) => {
    if (username.length < 6) {
      return false;
    }
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(username)) {
      return false;
    }

    if (username.includes("@")) {
      return false;
    }

    return true;
  };
  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    return emailRegex.test(email);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUsernameValid(formData.username)) {
      alert(
        "Username must be at least 6 characters long and should not contain the '@' symbol."
      );
      return;
    }

    if (!isEmailValid(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const isStrongPassword = (password: string) => {
      return password.length >= 8;
    };

    if (!isStrongPassword(formData.password)) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    console.log(formData);
    // if (
    //   isUsernameValid(formData.username) &&
    //   isEmailValid(formData.email) &&
    //   isStrongPassword(formData.password) &&
    //   formData.password !== formData.confirmPassword
    // ) {
    //   navigate("/home");
    // }
  };
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
          <article className={Style.content}>
            <div className={Style.form1}>
              <div className={Style.logoContainer}>
                <a href="/home">
                  <img className={Style.logo} src={Logo} alt="Logo" />
                </a>
              </div>
              <div className={Style.hh}>
                <h5>GET STARTED</h5>
              </div>
              <div className={Style.paragraphh}>
                <p>by creating a free account </p>
              </div>

              {
                <form onSubmit={handleSubmit}>
                  <div className={Style.formGroup}>
                    <label className={Style.lbl} htmlFor="username">
                      Username
                    </label>

                    <input
                      className={Style.inp}
                      placeholder="Enter a username"
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={Style.formGroup}>
                    {" "}
                    <label className={Style.lbl} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={Style.inp}
                      placeholder="enter your Email"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label className={Style.lbl} htmlFor="password">
                      Password
                    </label>

                    <input
                      className={Style.inp}
                      placeholder="Enter a strong password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className={`${Style.showPasswordBtn} showPasswordBtn`}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  <div className={Style.formGroup}>
                    <label className={Style.lbl} htmlFor="confirmPassword">
                      Confirm Password
                    </label>

                    <input
                      className={Style.inp}
                      placeholder="Re-enter the password"
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className={`${Style.showPasswordBtn} showPasswordBtn`}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  <div className={Style.formGroup}>
                    <button type="submit" className={Style.btn}>
                      Sign Up
                    </button>

                    <div className={Style.horizontalLine}>
                      <span className={Style.lineText}>Or Sign Up With</span>
                    </div>

                    <div className={Style.socialIcons}>
                      <a
                        href="https://accounts.google.com/signin"
                        className={Style.googleIcon}
                      >
                        Google<span> </span>
                        <FaGoogle />
                      </a>
                      <a
                        href="https://www.facebook.com/login.php"
                        className={Style.facebookIcon}
                      >
                        Facebook<span> </span>
                        <FaFacebook />
                      </a>
                    </div>
                    <div className={Style.paragraphh}>
                      <p>
                        Already have an account?{" "}
                        <a href="/login" className={Style.si}>
                          login
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              }
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default SignUp;
