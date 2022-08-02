import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../marker";
import "./styles.css";

const Map = () => {
  const handleApiLoaded = (map, maps) => {
    // key AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek
  };

  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCx3n09Zpghadz7-CH2BP3wW-yq9UcH5M8" }}
        defaultCenter={{
          lat: -23.561684,
          lng: -46.625378,
        }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <Marker lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
