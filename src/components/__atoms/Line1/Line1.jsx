import React from "react";
import "./Line1.css";
import Line1Src from "../Line1Src/Line1Src";
import Line1Text from "../Line1Text/Line1Text";

const Line1 = (props) => {
  console.log(props.wheat);
  return (
    <div className="Line1">
      <Line1Text h1={props.h1} />
      <Line1Src wheat={props.wheat} fire={props.fire} leaf={props.leaf} />
    </div>
  );
};

export default Line1;
