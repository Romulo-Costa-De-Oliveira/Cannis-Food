import React from "react";
import Header from "../../components/header";
import CardProduct from "../../components/product/cardProduct";

import "./styles.css";

const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              className="img-fluid petshop-img"
              src="https://play-lh.googleusercontent.com/5IQYhwNGOGuyAsCSC_NUjBOJ7dF3ZWV3S5GbAb98Vl74CVzGsZqQhrkY2K-I-meKew"
              alt=""
            />
            <b>Petlove</b>
            <div className="petshop-info d-flex">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <span className="mdi mdi-star"></span>
                  <small>3.8</small>
                </div>
                <div className="col-sm-12 col-md-4">
                  <span className="mdi mdi-cash"></span>
                  <small>$$$</small>
                </div>
                <div className="col-sm-12 col-md-4">
                  <span className="mdi mdi-crosshairs-gps"></span>
                  <small>2,9km</small>
                </div>
              </div>
            </div>
            <label className="badge badge-danger">Frete Grátis</label>
          </div>
          <div className="col-10">
            <div className="col-12">
              <h5>Produtos</h5>
              <br />
              <div className="row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                  <CardProduct />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
