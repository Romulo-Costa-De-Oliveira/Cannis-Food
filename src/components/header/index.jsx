import React from "react";
import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

import "./styles.css";

const Header = ({ whiteVersion, hideCart }) => {
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img
            src={whiteVersion ? LogoWhite : Logo}
            className="img-logo"
            alt="PetFood"
          />
        </Link>
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"> 2 Itens</span>
        </button>
      )}
    </div>
  );
};

export default Header;
