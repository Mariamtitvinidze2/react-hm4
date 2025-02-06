import React from "react";
import "./Line3.css";

import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";

const Line3 = (props) => {
  return (
    <div className="Line11 Line3">
      <Card1 p1={props.p1} />
      <Card2 p2={props.p2} />
      <Card3 p3={props.p3} />
    </div>
  );
};

export default Line3;
