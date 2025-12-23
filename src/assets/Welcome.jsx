import React from "react";
import "./Welcome.css";

function Welcome(props) {
  return (
    <div className="wel">
      Welcome to react
      <h2> {props.title} </h2>
    </div>
  );
}

export default Welcome;
