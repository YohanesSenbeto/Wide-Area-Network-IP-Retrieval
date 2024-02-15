import React from "react";
import Wanip from "./Wanip.js";
import WanIpAdder from "../components/wanipadder/WanIpAdder.js";
import banner from "../../assets/images/banner.png";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <div class="typewriter-text">WELCOME TO WANIP</div>
      <img className="homebanner" src={banner} alt="banner"></img>
      <Wanip />
      <WanIpAdder />
    </div>
  );
}

export default Home;
