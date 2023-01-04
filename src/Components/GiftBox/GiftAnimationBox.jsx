import React, { useEffect, useReducer, useRef } from "react";
import "./style.css";

import box from "../../img/BoxBottom.png";
import boxLid from "../../img/boxTop.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Preguntas from "../../Common/Preguntas.json"

const init_state = {
  move: "move",
  rotated: "",
  rotating: "",
};


export default function GiftBoxAnimation() {

  useEffect(()=>{
    document.addEventListener("click",handleClickAway,true)
  },[])

  const refOne = useRef(null)
  
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state
  );

  function handleClickAway(e) {
    if(!refOne.current.contains(e.target)){
      setState(init_state)
    }
  }

  const { move, rotating, rotated } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      
      setTimeout(() => {
        mostrarAlerta()
      }, 100);
      
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 500);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  
  
  const MySwal = withReactContent(Swal);
  function mostrarAlerta() {
    const random = () => Math.floor(Math.random() * Preguntas[0].preguntas.length);
    MySwal.fire({
      title: Preguntas[0].preguntas[random()],
      width: 600,
      padding: "3em",
      color: "#C30525",
      background: "#fff",
      confirmButtonText:"Ok",
      confirmButtonColor:"#C30525",
      backdrop: `
      rgba(0,0,0,0.4)
      left top
      no-repeat
    `,
    });
  }

  return (
    <div className="App">
      <div className="img-container"ref={refOne}>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
          style={{marginBottom:"-4px"}}
        />
        <button className="box pt-14 items-center" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>

      </div>
    </div>
  );
}
