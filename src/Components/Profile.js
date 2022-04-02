import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function Profile(props) {
    return (
      <Container>
          <h1>Welcome To BURP!</h1>
          <hr></hr>
          <Row>
            <Col xs="5">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="bfg.jpg" alt="userImage"/>
                    <Card.Body>
                        <Card.Title>{props.Username}</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <h3>About</h3>
            </Col> 
          </Row>
          <br/>
          
        <Tabs style={{background:"silver", color:"black"}} defaultActiveKey="Added Recipes" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Added Recipes" title="Added Recipes">
                {/* <Sonnet /> */}
                <h1>this is the added recipe tab</h1>
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="bfg.jpg" alt="userImage"/>
                    <Card.Body>
                        <Card.Title>{props.Username}</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </Tab>
            <Tab eventKey="Favorites" title="Favorites">
                {/* <Sonnet /> */}
                <h1> this is the favorites tab</h1>
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="bfg.jpg" alt="userImage"/>
                    <Card.Body>
                        <Card.Title>{props.Username}</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </Tab>
            {/* <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
            </Tab> */}
        </Tabs>
        <br/>
        <hr></hr>
      </Container>
    );
  }
  
  export default Profile;
  