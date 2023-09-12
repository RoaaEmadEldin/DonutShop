import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav>
      <ul>
        <Link to="/home">Home</Link>
      </ul>
      <ul>
        <Link to="/login">Log In</Link>
      </ul>
      <ul>
        <Link to="/signup">Sign Up</Link>
      </ul>
    </nav>
  );
};

export default Links;
