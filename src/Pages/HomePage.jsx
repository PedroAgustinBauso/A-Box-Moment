import React from 'react'
import NavBar from '../Components/NavBar'
import GiftAnimationBox from '../Components/GiftBox/GiftAnimationBox'
import background from "../img/background.jpg"

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`,height:"100vh", width:"100wh", backgroundPosition: "center",backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
        <NavBar />
        <GiftAnimationBox />
    </div>
  )
}

export default HomePage