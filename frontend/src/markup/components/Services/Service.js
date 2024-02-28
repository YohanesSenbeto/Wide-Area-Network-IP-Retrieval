import React from 'react';
import './services.css';
// Service component to render individual service details
const Service = ({ title, description }) => (
  <div className="service">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// App component to display the list of services
const App = () => {
  // Array of service objects
  const services = [
    { title: 'Wide Area Network Internet protocol info ', description: 'Generate WAN IP Address information specially subnet mask and default gateway ' },
    { title: 'Tutorials videos', description: 'Tutorials videos how to Configure wifi Routers.' },
    { title: 'Network Cable installation', description: 'Network Cable installation for Office and Building by taking contract' },
    // Add more services as needed
  ];

  return (
    <div className="app">
      <h1>Our Services</h1>
      <div className="services-list">
        {/* Map through the services array and render Service component for each service */}
        {services.map((service, index) => (
          <Service key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
