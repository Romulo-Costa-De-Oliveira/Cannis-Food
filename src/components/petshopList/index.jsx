import React from "react";

import "./styles.css";

const PetshopList = () => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img
          className="img-fluid"
          src="https://play-lh.googleusercontent.com/5IQYhwNGOGuyAsCSC_NUjBOJ7dF3ZWV3S5GbAb98Vl74CVzGsZqQhrkY2K-I-meKew"
          alt=""
        />
      </div>

      <div className="d-inline-block p-1 pl-3 align-bottom">
        <b>Petlove</b>

        <div className="petshop-info">
          <span className="mdi mdi-star"></span>
          <small>
            <b>3.8</b>
          </small>

          <span className="mdi mdi-cash"></span>
          <small>$$$</small>

          <span className="mdi mdi-crosshairs-gps"></span>
          <small>2,9km</small>
        </div>
        <label className="badge badge-danger">Frete Grátis</label>
      </div>
    </li>
  );
};

export default PetshopList;
