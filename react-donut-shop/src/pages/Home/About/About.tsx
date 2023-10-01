import Style from "./About.module.css";
import { LuDonut } from "react-icons/lu";
import { BiWinkTongue } from "react-icons/bi";
import { MdOutlineCleanHands } from "react-icons/md";
import { RESOUCRE_PATH } from "../Home";

const About = () => {
  return (
    <>
      <div className={Style.about}>
        <article className={Style.card}>
          <span>
            <LuDonut />
          </span>
          <p>
            At our small doughnut business, we take pride in crafting the most
            mouthwatering and irresistible doughnuts you'll ever taste.
          </p>
        </article>
        <article className={Style.card}>
          <span>
            <BiWinkTongue />
          </span>
          <p>
            Prepare your taste buds for a flavor adventure like no other! We
            believe in pushing the boundaries of traditional doughnuts and
            bringing you exciting.
          </p>
        </article>
        <article className={Style.card}>
          <span>
            <MdOutlineCleanHands />
          </span>
          <p>
            Cleanliness is of utmost importance to us at our small doughnut
            business. We understand that a hygienic environment is essential to
            providing a pleasant experience.
          </p>
        </article>
        <article className={Style.videoContainer}>
          <video controls>
            <source
              src={`${RESOUCRE_PATH}main/aboutVideo.mp4`}
              type="video/mp4"
            />
          </video>
        </article>
        <article className={Style.posterContainer}>
          <img
            src={`${RESOUCRE_PATH}backgrounds/dounuts-background.jpeg`}
            alt="coming soon"
          />
          <div className={Style.textContainer}>
            <p>Madinty Branch Coming Soon</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default About;
