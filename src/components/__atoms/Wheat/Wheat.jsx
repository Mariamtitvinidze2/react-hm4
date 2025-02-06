import React from "react";
import "./Wheat.css";

const Wheat = (props) => {
  return (
    <div className="wheat">
      <img src={props.wheat} alt="wheat" />
    </div>
  );
};

export default Wheat;
