import React from "react";
import "./HeaderSrc.css";
import Info from "../../../assets/icons/info.png";

const HeaderSrc = (props) => {
  return (
    <div className="HeaderSrc">
      <img src={props.src} />
      <div className="Info">
        <img src={Info} alt="info" />
      </div>
    </div>
  );
};

export default HeaderSrc;
