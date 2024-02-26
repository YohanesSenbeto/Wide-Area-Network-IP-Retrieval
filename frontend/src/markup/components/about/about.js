import React from 'react';
import './about.css'; // Import CSS file
import bannerImage from '../../../assets/images/banner/about.png';

function About() {
  return (
    <div className='about-container'>
      <h4 className='about-description'> </h4>
      <div className="card text-bg-dark">
        <br />
        <h1 className="card-title">About US</h1>
        <h4 className="card-text">Our website that enables users to retrieve
          their WAN IP addresses, discover subnet masks, default gateway
          information, geolocation data, and other pertinent network details.
          The website will also offer troubleshooting assistance and network
          optimization resources to enhance users' understanding and performance of
          WAN IP addresses.
        </h4>
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <p className="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  );
}

export default About;
