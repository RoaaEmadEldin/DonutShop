import { Link } from "react-router-dom";
import Style from "./Links.module.css";
const Links = () => {
  return (
    <nav>
      <ul className={Style.linksContainer}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
