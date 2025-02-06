import React from "react";
import "./Wleaf.css";

const Wleaf = (props) => {
  return (
    <div className="leaf">
      <img src={props.leaf} alt="leaf" />
    </div>
  );
};

export default Wleaf;
