import React from "react";
import "./Card.css";
import Header from "../Header/Header";
import MiddleBox from "../MiddleBox/MiddleBox";
import Footer from "../Footer/Footer";

const Card = (props) => {
  return (
    <div className="Card">
      <Header src={props.src} />
      <MiddleBox
        img={props.img}
        h1={props.h1}
        text={props.text}
        p1={props.p1}
        p2={props.p2}
        p3={props.p3}
        wheat={props.wheat}
        fire={props.fire}
        leaf={props.leaf}
      />
      <Footer price1={props.price1} price2={props.price2} />
    </div>
  );
};

export default Card;
