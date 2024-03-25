// SignupSuccess.js
import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const SignupSuccess = () => {
const navigate =useNavigate()

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={7}>
          <div className="signup-success">
            <h2>Signup Successful!</h2>
            <p>Your account has been created successfully.</p>
          
            {/* Add other fields as needed */}
            <Button variant="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupSuccess;
