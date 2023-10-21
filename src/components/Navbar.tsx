import * as React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../ROUTES/Routes";

interface INavBarProps {
  image: string;
}

export default function NavBar({ image }: INavBarProps) {
  return (
    <>
      <div className="Navbar">
        <Link to={ROUTES.home}>
          <img src={image} alt="" />
          <h2>Music Db</h2>
        </Link>
      </div>
      <div className="border"></div>
    </>
  );
}
