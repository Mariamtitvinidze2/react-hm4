import React from "react";
import "./Footer.css";
import Prices from "../../__atoms/Prices/Prices";
import Button from "../../__atoms/Button/Button";

const Footer = (props) => {
  return (
    <div className="Footer">
      <Prices price1={props.price1} price2={props.price2} />
      <Button />
    </div>
  );
};

export default Footer;
