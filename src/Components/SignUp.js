import './LoginPage.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import React from "react"
// import { BsInstagram} from "react-icons/fa";
function SignUp() {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <div style={{alignItems:"center", marginTop:"30px"}} class="logo">
        <img src="./burp-icon.jpg" 
          alt="logo" 
          style={{width:"130px", borderRadius:"5px"}}/>
      </div>
      <Form style={{margin:"50px", padding:"15px"}} noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center"}}> Welcome To BURP</h1>
        <hr></hr>
      
        <Form.Group controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
              
            </InputGroup>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
            <Form.Control.Feedback type="invalid">
                Please choose a valid email.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
            <Form.Control.Feedback type="invalid">
                Please choose a Password.
              </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Prefer not to say">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                </Form.Select>
            {/* <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Occupation</Form.Label>
            <Form.Control type="text" placeholder="Occupation"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid occupation.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
    
  );
}

// render(<FormExample />);

export default SignUp;
