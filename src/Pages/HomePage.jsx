import React from "react";
import NavBar from "../Components/NavBar";
import GiftAnimationBox from "../Components/GiftBox/GiftAnimationBox";
import background from "../img/background.jpg";
import { AiOutlineArrowDown } from "react-icons/ai"

const HomePage = () => {
  return (
    <div >
      <div className="container">
        <NavBar />
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center text-3xl">¿Para qué?</h1>
          <p className="text-white text-center mt-5 text-lg">
            Considero que siempre se necesita tener un pequenio espacio de
            reflexion, donde poder frenar con todo el estres, la carga del dia o
            semanas duras que tengamos. Por una de esas razones cree esta
            pagina, que permite poner un freno y sentarse a preguntarse cosas
            que nos ayuden a continuar, replantearos como hacemos las cosas,
            como nos vemos a nosotros mismos, donde estamos parados, etc.
            Gracias a esto siento que nos ayuda a salir del modo automatico que
            tan facilmente nos volvemos a sumergir. Permitirnos este espacio de
            pensar y conectarnos con nostoros siento que ayuda a salir cada vez
            con mas fuerza y mantenernos en un continuo crecimiento
          </p>
          <h3 className="text-white text-center mt-14 text-4xl">
            Te invito a clickear sobre la caja
          </h3>
          <p className="text-white text-center mt-5 mb-5"> <AiOutlineArrowDown size={70} /></p>
            <GiftAnimationBox />      
        </div>
      </div>
    </div>
  );
};

export default HomePage;
