import React from "react";

const Card = ({ heading, content }) => {
  return (
    <div className="card">
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Card;