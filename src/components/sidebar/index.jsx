import React, { useState, UseState, useEffect } from "react";
import { Dock } from "react-dock";
import ProductList from "../product/list";
import "./styles.css";

const SideBar = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("openCart", () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha sacola (4)</h5>
        <div className="row products">
          {[1, 2].map((p) => (
            <ProductList />
          ))}
        </div>
        <div className="row footer align-items-end">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ 90,00</h3>
          </div>
          <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">
            Finalizar
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default SideBar;
