import React, { useState } from 'react';
import './support.css';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { name, email, message };

    fetch('http://localhost:8000/api/support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Form data sent successfully');
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.error('Error sending form data');
        }
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
  };

  return (
    <div className="support-page">
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='email'>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="solid-border" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Support;
