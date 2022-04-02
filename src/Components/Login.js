import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

// import { BsInstagram} from "react-icons/fa";
function Login(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
          Login to BURP!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
            <br/>
          </Form.Group>
          <Button onClick={props.onHide}>Submit</Button>
          <br/><br/>
          <Form.Text >
            Not Registered Yet?            
            <a href="/SignUpPage">Sign up</a>
          </Form.Text>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        
      </Modal.Footer> */}
    </Modal>
  );
}

export default Login;
