import React from "react";
import "./Header.css";
import HeaderSrc from "../../__atoms/HeaderSrc/HeaderSrc";

const Header = (props) => {
  return (
    <div className="Header">
      <HeaderSrc src={props.src} />
    </div>
  );
};

export default Header;
