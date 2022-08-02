import React from "react";
import Header from "../../components/header";
import PetshopList from "../../components/petshopList";
import Map from "../../components/Map";
import "./styles.css";
import Marker from "../../components/marker";

const Home = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Próximos de você.</h5>
        </div>
        <ul className="col-12 petshop-list">
          <PetshopList />
          <PetshopList />
          <PetshopList />
          <PetshopList />
        </ul>
      </div>
      {
        //<Map />
        <div className="map h-100 w-100">
          <Marker />
        </div>
      }
    </div>
  );
};

export default Home;
