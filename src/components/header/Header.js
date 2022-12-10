import "./Header.scss";
import logo from "../../assets/icons/Logo1.png";
import icon from "../../assets/icons/icon8.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [openlist, setOpenList] = useState(false);

  return (
    <section className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="Company logo" />
        </div>
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
          <div className="header__list">Packages</div>
          <div className="header__list">Customize</div>
          <div className="header__list">How it Works</div>
          <div className="header__list">About</div>
          <div className="header__list">Cart</div>
        </div>
      </div>
      {openlist === true ? (
        <div className="header__hamburger-list-container">
          <div className="header__hamburger-list">
            <div className="header__hamburger-item">Packages</div>
            <div className="header__hamburger-item">Customize</div>
            <div className="header__hamburger-item">How it Works</div>
            <div className="header__hamburger-item">About</div>
            <div className="header__hamburger-item">Cart</div>
          </div>
        </div>
      ) : (
        " "
      )}
    </section>
  );
}
