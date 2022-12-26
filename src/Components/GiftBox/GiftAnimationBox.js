import React, { useReducer, useState } from "react";
import "./style.css";

import box from "../../img/BoxBottom.png";
import boxLid from "../../img/boxTop.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
// import Confetti from "./confetti/Confetti";

import Preguntas from "../../Common/Preguntas.json"

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
};

export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;
  const [view, setView] = useState(false)

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      mostrarAlerta()
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  const MySwal = withReactContent(Swal);
  function mostrarAlerta() {
    MySwal.fire({
      title: "Custom width, padding, color, background.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff",
      backdrop: `
      rgba(0,0,0,0.4)
      left top
      no-repeat
    `,
    })
    .then(()=> setView(true));
  }

  return (
    <div className="App">
      {/* <Confetti open={jump === "jump"} /> */}
      <div className="img-container">
        {/* <img className={`kuku ${jump}`} src={kuku} alt="kuku" /> */}
        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
