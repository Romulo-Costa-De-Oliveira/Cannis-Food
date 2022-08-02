import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Petshop from "./pages/Petshop";
import SideBar from "./components/sidebar";
import Checkout from "./pages/Chekout";
import Home from "./pages/Home";

import "./styles/global.css";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/petshop/:id" element={<Petshop />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <SideBar />
    </>
  );
};

export default AppRoutes;
