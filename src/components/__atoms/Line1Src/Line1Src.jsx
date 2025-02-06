import React from "react";
import "./Line1Src.css";
import Wheat from "../Wheat/Wheat";
import Wfire from "../Wfire/Wfire";
import Wleaf from "../Wleaf/Wleaf";

const Line1Src = (props) => {
  console.log(props.wheat);
  console.log(props.fire);
  console.log(props.leaf);
  return (
    <div className="Line1Src">
      {props.wheat && <Wheat wheat={props.wheat} />}
      {props.leaf && <Wleaf leaf={props.leaf} />}
      {props.fire && <Wfire fire={props.fire} />}
    </div>
  );
};

export default Line1Src;
