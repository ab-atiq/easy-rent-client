import React from "react";
import { useParams } from "react-router-dom";

const CarRent = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h2>Rent car page and TansId: {tranId}</h2>
    </div>
  );
};

export default CarRent;
