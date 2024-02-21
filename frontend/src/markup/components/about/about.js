import React from 'react';
import './about.css';
import bannerImage from '../../../assets/images/banner/about.png';

function About() {
  return (
    <div className='about-container'>
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <h4 className='about-description'>
        
      </h4>
      <div className="card text-bg-dark">
  <img src="..." class="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title"> WAN IP WEBSITE DEVELOPMENT</h5>
    <h3 className="card-text">is the website that enables users to retrieve
        their WAN IP addresses, discover subnet masks, default gateway
        information, geolocation data, and other pertinent network details.
        The website will also offer troubleshooting assistance and network
        optimization resources to enhance users' understanding and performance of
        WAN IP addresses.</h3>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>
  );
}

export default About;
