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
      <h2>Project: WAN IP WEBSITE DEVELOPMENT</h2>
      <h4>Introduction:</h4>
      <br />
      <p>Hi, I am Yohanes Senbeto Kankure a passionate software developer excited to share my latest project with you. WAN IP WEBSITE DEVELOPMENT is primarily focus on providing WAN IP address information specific to the country. It will cover subnetting, default gateway details, geolocation data, ISP identification, and troubleshooting guides related to WAN IP networking within the Ethiopian context.</p>
      <h4>Project Overview:</h4>
      <p><strong>WAN IP WEBSITE DEVELOPMENT</strong> is the website that enable users to retrieve their WAN IP addresses, discover subnet masks, default gateway information, geolocation data, and other pertinent network details. The website will also offer troubleshooting assistance and network optimization resources to enhance users' understanding and performance of WAN IP addresses. The research will employ a user-centered design approach, involving user surveys, interviews, prototyping, testing, and evaluation. The expected outcomes of the research are a functional and user-friendly website, a user manual, and a report on the website's usability and effectiveness. It was developed to Solve users to retrieve WAN IP address Information get  Subnet mask and default gateway to configure their Router modem also they get tutorial video for steps to configure . Some of its key features include:</p>
      <ul>
        <li>By Entering WAN IP addresses user can get their subnet masks, default gateway information, geolocation data, and other network details.</li>
        <li>Tutorial video supports.</li>
        <li>Consultant platform on the system.</li>
      </ul>
      <Wanip />
      <WanIpAdder />
    </div>
  );
}

export default Home;
