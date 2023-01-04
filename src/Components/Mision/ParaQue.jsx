import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const ParaQue = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-center text-3xl">¿Para qué?</h1>
      <p className="text-white text-center mt-5 text-lg">
        Considero que siempre se necesita tener un pequeño espacio de reflexión,
        donde poder frenar con todo el estrés, la carga del día o semanas duras
        que tengamos. Por una de esas razones cree esta página, que permite
        poner un freno y sentarse a preguntarse cosas que nos ayuden a
        continuar, replantearos como hacemos las cosas, como nos vemos a
        nosotros mismos, donde estamos parados, etc. Gracias a esto siento que
        nos ayuda a salir del modo automático que tan fácilmente nos volvemos a
        sumergir. Permitirnos este espacio de pensar y conectarnos con nuestros
        siento que ayuda a salir cada vez con más fuerza y mantenernos en un
        continuo crecimiento.
      </p>
      <h3 className="text-white text-center mt-14 text-4xl">
        Te invito a clickear sobre la caja
      </h3>
      <p className="text-white text-center mt-5 mb-5">
        {" "}
        <AiOutlineArrowDown size={70} />
      </p>
    </div>
  );
};

export default ParaQue;
