// import { Container } from '@mui/system';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Login() {
  
  const [loginData,setLoginData] = useState({});

  const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    console.log(value)
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
}
  return (
    <Container className="bg-blac">
      <Form className="bg-blac w-25 ">
        <Form.Group className="m-3 bg-blac" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
           type="email"
           name="email"
           onBlur ={handleOnChange} 
           placeholder="Enter email" /> 
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password" 
           name="password"
           onBlur ={handleOnChange}
           placeholder="Password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onChange={handleLoginSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
