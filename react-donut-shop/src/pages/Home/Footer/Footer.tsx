import { FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/Hi";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footerContent}>
      <p className={Style.companyName}>Fatis.eg</p>
      <p className={Style.companyDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam
        laudantium in consequatur maxime repellat! Nisi modi quibusdam
        voluptatibus beatae itaque magnam voluptates eveniet eaque, mollitia,
        asperiores libero deserunt dolor?
      </p>
      <div className={Style.icons}>
        <span>
          <a href="https://www.instagram.com/fatis.eg/">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="https://www.tiktok.com/@fatis.eg">
            <FaTiktok />
          </a>
        </span>
        <span>
          <a href="">
            <HiOutlineMail />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
