import React, { useState } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';
const AddServicesForm = () => {
  const [formData, setFormData] = useState({
    service_name: '',
    service_description: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.service_name) {
      errors.service_name = 'Service name is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  console.log(formData)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      fetch('http://localhost:8000/api/Add-services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Service Name</FormLabel>
        <FormControl
          type="text"
          name="service_name"
          value={formData.service_name}
          onChange={handleChange}
          isInvalid={!!errors.service_name}
        />
        <Feedback type="invalid">{errors.service_name}</Feedback>
      </FormGroup>
      <FormGroup>
        <FormLabel>Service Description</FormLabel>
        <FormControl
          as="textarea"
          name="service_description"
          value={formData.service_description}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddServicesForm;