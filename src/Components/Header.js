//now we have to import each component individually
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Header() {
  return (
    <div>
        {/* bg="dark" variant="dark"sticky="top" */}
        <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                {/* dropdown#1 */}
                <NavDropdown title="Traditional" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">East</NavDropdown.Item>
                <NavDropdown.Item href="#action3">North</NavDropdown.Item>
                <NavDropdown.Item href="#action4">North Eastern</NavDropdown.Item>
                <NavDropdown.Item href="#action4">West</NavDropdown.Item>
                <NavDropdown.Item href="#action4">South</NavDropdown.Item>
                </NavDropdown>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action5"> */}
                    {/* Something else here */}
                {/* </NavDropdown.Item> */}
                
                {/* dropdown#2 */}
                <NavDropdown title="Cuisine" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">American</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Chinese</NavDropdown.Item>
                <NavDropdown.Item href="#action4">French</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Italian</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Japanese</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Korean</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Mexican</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Spanish</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Thai</NavDropdown.Item>
                </NavDropdown>

                {/* dropdown#3 */}

                <NavDropdown title="Course" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">BreakFast</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Brunch</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Brunch</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Brunch</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                {/* dropdown#4 */}
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                {/* dropdown#5 */}
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <div>
            <Button style={{marginLeft:"25px", marginRight:"3px"}} variant="outline-success">Sign Up</Button>
            <Button style={{margin:"3px"}} variant="outline-success">Login</Button>
            </div>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Container fluid style={{background:"grey"}}>
            hello this is the container
            <div>
                

            </div>

            <div>

            </div>
        </Container>

    </div>
  );
}

export default Header;
