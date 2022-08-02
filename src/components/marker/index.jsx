import React from "react";
import "./styles.css";
import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";

const Marker = () => {
  return (
    <div className="marker">
      <img src={MarkerIcon} className="img-frame" />
      <img
        src="https://play-lh.googleusercontent.com/5IQYhwNGOGuyAsCSC_NUjBOJ7dF3ZWV3S5GbAb98Vl74CVzGsZqQhrkY2K-I-meKew"
        alt="Mark"
        className="img-marker"
      />
    </div>
  );
};

export default Marker;
