import React from "react";
import "./MainM.css";
import Card from "../../__molecules/Card/Card";
import Wheat from "../../../assets/icons/wheat.png";
import Leaf from "../../../assets/icons/leaf.png";
import Fire from "../../../assets/icons/fire.png";
import Pizza from "../../../assets/images/Pizza.png";
import Strawberry from "../../../assets/images/Strawberry.png";
import Tortellini from "../../../assets/images/Tortellini.png";

const MainM = (props) => {
  return (
    <div className="MainCard">
      <Card
        src={Pizza}
        wheat={Wheat}
        fire={Fire}
        h1={"Pepperoni Pizza"}
        text={
          "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
        }
        p1={"265 Cal"}
        p2={"P/F/C: 12/10/31"}
        p3={"53.8 °C"}
        price1={"$23.90"}
        price2={"$29.90"}
      />
      <Card
        src={Tortellini}
        wheat={Wheat}
        fire={Fire}
        leaf={Leaf}
        h1={"Tortellini"}
        text={
          "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        }
        p1={"270 Cal"}
        p2={"P/F/C: 18/4/41"}
        p3={"42.4 °C"}
        price1={"$17.90"}
        price2={"$22.90"}
      />
      <Card
        src={Strawberry}
        wheat={Wheat}
        h1={"Strawberry Cake"}
        text={
          "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        }
        p1={"346 Cal"}
        p2={"P/F/C: 6/14/49"}
        p3={"13.9 °C"}
        price1={"$13.90"}
        price2={"$18.90"}
      />
    </div>
  );
};

export default MainM;
