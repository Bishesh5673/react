import React from "react";
import './Card.css'

function Card(props) {
  const { image, age, name } = props.title;
  return (
    <div>
      <img src={image} alt="" />
      <h1>{name}</h1>
    </div>
  );
}

export default Card;
