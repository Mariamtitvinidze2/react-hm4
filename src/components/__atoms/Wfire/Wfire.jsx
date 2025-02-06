import React from "react";
import "./Wfire.css";

const Wfire = (props) => {
  return (
    <div className="fire">
      <img src={props.fire} alt="fire" />
    </div>
  );
};

export default Wfire;
