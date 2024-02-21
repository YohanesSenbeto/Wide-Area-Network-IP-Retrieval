import React from "react";
import Wanip from "./Wanip.js";
import banner from "../../assets/images/banner.png";
import guide from "../../assets/images/guide.png";
import routerstep from "../../assets/images/routerstep.png";
import "./Home.css";

function Home(props) {
  return (
    <div>
      {/* Banner Image */}
      <img className="homebanner" src={banner} alt="banner"></img>

      {/* Introduction Text */}
      <div className="intro-text">
        <h2>Get Your Subnet Mask and Default Gateway Effortlessly!</h2>
        <h6>
          Discover your WAN IP information with ease. Simply fill out the WANIP form, provide us with your IP address, and we'll take care of the rest.
        </h6>
      </div>
      <h1>Steps  to Use:</h1> 
      <div className='guide'>
      <img src={guide} alt="guide"></img>
      <div className="wan">
      <Wanip />
      </div>
    
        
      </div>
      <div>
      <img className="guide" src={routerstep} alt="routerstep"></img>
      </div>
      {/* Components */}
     
    </div>
  );
}

export default Home;

