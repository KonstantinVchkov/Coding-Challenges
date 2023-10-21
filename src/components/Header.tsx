// import navLogo from "../../public/img/logo.png"
import "../style/header.css";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons"; // Import the Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems: string[] = [
  "Home",
  "Bikes",
  "Gear",
  "Parts",
  "Tires",
  "Service Info",
  "Catalogues",
  "Contact",
];

export const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src="./img/logo.png" alt="" />
      </div>
      <div className="header-links">
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="headerIcons">
        <FontAwesomeIcon icon={faSearch}  className="icon search"/>
        <FontAwesomeIcon icon={faShoppingBag} className="icon shopBag"/>
      </div>
    </div>
  );
};
