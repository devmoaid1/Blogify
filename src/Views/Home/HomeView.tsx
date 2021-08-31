import React,{FC} from 'react'
import background from "../../assets/images/background.jpg"
import "./home.css"
const HomeView:FC=()=> {
    return (
        <div className="HomeContainer">
            <img className="backgroundimage" src={background} alt={"background"}></img>
        </div>
    )
}

export default HomeView
