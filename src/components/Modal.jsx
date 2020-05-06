import React from "react";
import "./Modal.css";
import fightclub from "./img/fightclub.jpg";

export default function Modal(props) {
  return (
    <div
      className="Modal"
      style={{
        transform: props.visible ? "translateY(0vh" : "translateY(-100vh)",
        opacity: props.visible ? "1" : "0",
      }}
    >
      <button onClick={props.cache}>x</button>
      <p>
        First Rule of PastekMovie never Speak of PastekMovie
        <img className="logo" src={fightclub} alt="the affich" />
      </p>
    </div>
  );
}
