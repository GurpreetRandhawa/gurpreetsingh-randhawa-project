import "./Header.scss";
import logo from "../../assets/icons/Logo1.png";
import icon from "../../assets/icons/icon8.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [openlist, setOpenList] = useState(false);

  return (
    <section className="header">
      <div className="header__container">
        <Link to={"/"} className="header__logo-container">
          <img className="header__logo" src={logo} alt="Company logo" />
        </Link>
        <div className="header__hamburger">
          <img
            className="header__hamburger-icon"
            src={icon}
            alt="Company logo"
            onClick={() => {
              setOpenList(!openlist);
            }}
          />
        </div>

        <div className="header__right-container">
          <Link to={"/packages"} className="header__list">
            Packages
          </Link>
          <Link to={"/customize"} className="header__list">
            Customize
          </Link>
          <Link to={"/about"} className="header__list">
            About
          </Link>
        </div>
      </div>
      {openlist === true ? (
        <div className="header__hamburger-list-container">
          <div className="header__hamburger-list">
            <Link to={"/packages"} className="header__hamburger-item">
              Packages
            </Link>
            <Link to={"/customize"} className="header__hamburger-item">
              Customize
            </Link>
            <Link to={"/about"} className="header__hamburger-item">
              About
            </Link>
          </div>
        </div>
      ) : (
        " "
      )}
    </section>
  );
}
