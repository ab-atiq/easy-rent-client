import * as React from "react";
import "./Services.css";
const Service = ({ service }) => {
  const { _id, name, price, image } = service;
  return (
    <div className="Singel_card">
      <div >
        <img className="image_Optimize" src={image} alt="" />
        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Service;
