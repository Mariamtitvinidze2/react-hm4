import React from "react";
import "./MiddleBox.css";
import Line1 from "../../__atoms/Line1/Line1";
import Line2 from "../../__atoms/Line2/Line2";
import Line3 from "../../__atoms/Line3/Line3";

const MiddleBox = (props) => {
  return (
    <div className="MiddleBox">
      <Line1
        img={props.img}
        h1={props.h1}
        wheat={props.wheat}
        fire={props.fire}
        leaf={props.leaf}
      />
      <Line2 text={props.text} />
      <Line3 p1={props.p1} p2={props.p2} p3={props.p3} />
    </div>
  );
};

export default MiddleBox;
