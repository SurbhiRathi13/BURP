import './LoginPage.css';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Header from "./Header.js"

// import { BsInstagram} from "react-icons/fa";
const LoginPage = () => {
  const [user,setUser] = useState({
     email:"", password:""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value});
  }

  
  return (
    <div>
      <Header/>
      <Container>
      <div style={{alignItems:"center"}} class="logo">
        <img src="./burp-icon.jpg" 
          alt="logo" 
          style={{width:"130px", borderRadius:"5px"}}/>
      </div>
      <h1 style={{textAlign:"center"}}>Login to BURP!</h1>
      <div class="wrapper">
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={user.email} onChange={handleInputs} name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={user.password} onChange={handleInputs} name="password" type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
            <br/>
          </Form.Group>
          <Button >Submit</Button>
          <br/><br/>
          <Form.Text >
            Not Registered Yet?            
            <Link to="/SignUpPage">Sign up</Link>
          </Form.Text>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </div>
        
      </Container>
    </div>

    
    
  );
}

export default LoginPage;
