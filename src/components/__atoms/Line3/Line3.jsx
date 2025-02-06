import React from "react";
import "./Line3.css";
import Kath1 from "../Kath1/Kath1";
import Kath2 from "../Kath2/Kath2";
import Kath3 from "../Kath3/Kath3";

const Line3 = (props) => {
  return (
    <div className="Line11 Line3">
      <Kath1 p1={props.p1} />
      <Kath2 p2={props.p2} />
      <Kath3 p3={props.p3} />
    </div>
  );
};

export default Line3;
