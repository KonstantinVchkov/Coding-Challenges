import { Link } from "react-router-dom";
import { ROUTES } from "../ROUTES/Routes";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={ROUTES.homePage}>
        <h2>Restaraunt</h2>
      </Link>
      <Link to={ROUTES.favorites}>
        <h2><i className="fas fa-heart"></i></h2>
      </Link>
    </div>
  );
};

export default Navbar;
