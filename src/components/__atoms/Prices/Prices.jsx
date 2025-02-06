import React from "react";
import "./Prices.css";

const Prices = (props) => {
  return (
    <div className="Prices">
      <h1>{props.price1} </h1>
      <h2>{props.price2} </h2>
    </div>
  );
};

export default Prices;
