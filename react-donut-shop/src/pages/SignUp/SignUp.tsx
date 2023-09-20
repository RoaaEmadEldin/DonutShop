import Style from "./SignUp.module.css";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
              <h2>GET STARTED</h2>
              <p>by creating a free account </p>

              {
                <form onSubmit={handleSubmit}>
                  <div className={Style.formGroup}>
                    <label htmlFor="username">Username</label>

                    <input
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
                    <label htmlFor="email">Email</label>
                    <input
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
                    <label htmlFor="password">Password</label>
                    <input
                      placeholder="Enter a strong password"
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      placeholder="Re-enter the password"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <button type="submit" className={Style.btn}>
                      Sign Up
                    </button>
                    <div className={Style.socialIcons}>
                      <a href="#" className={Style.googleIcon}>
                        <i className="fab fa-google"></i> Sign Up with Google
                      </a>
                      <a href="#" className={Style.facebookIcon}>
                        <i className="fa-brands fa-facebook"></i> Sign Up with
                        Facebook
                      </a>
                    </div>
                    <p>
                      Already have an account?{" "}
                      <a href="/signin" className={Style.si}>
                        Sign in
                      </a>
                    </p>
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
