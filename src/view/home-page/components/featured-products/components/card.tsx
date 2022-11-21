import React from "react";
import "../styles/caurosel_card.scss";

const CarouselsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        border: "1px solid #E0D8D7",
        borderRadius: " 2px",
      }}
    >
      <div className="carContainer">
        <div className="carContainer2">
          <span className="carTitle">{title}</span>
          <span className="carDesciription">{description} </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            boxSizing: "border-box",
            padding: "0 8px",
          }}
        >
          <button className="cardBtn cardWhite">Learn More</button>
          <button className="cardBtn cardRed">Find a Dealer</button>
        </div>
      </div>
    </div>
  );
};
export default CarouselsCard;
