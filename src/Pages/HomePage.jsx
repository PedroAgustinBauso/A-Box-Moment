import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import GiftAnimationBox from "../Components/GiftBox/GiftAnimationBox";
import ClickText from "../Components/GiftBox/ClickText";


const HomePage = () => {
  return (
    <div >
      <div className="container">
        <NavBar />
        <div className="flex flex-col items-center">
        <ClickText />
        <GiftAnimationBox />      
        </div>
        </div>
      </div>

  );
};

export default HomePage;
