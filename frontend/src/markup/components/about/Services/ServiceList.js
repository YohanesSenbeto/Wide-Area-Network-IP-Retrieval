// ServiceList.js

import React from 'react';

function Services() {
  // Static service data (you can replace this with dynamic data from props or state)
  const services = [
    { id: 1, name: 'Service 1', description: 'Description of Service 1' },
    { id: 2, name: 'Service 2', description: 'Description of Service 2' },
    // Add more services as needed
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
