import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import { AiOutlineClockCircle } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { AiFillTags } from "react-icons/ai";
function RecipeInfo() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}> Name of the recipe</h1>
            <Row>
            <Col md="4">
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="pic1.jpg" />
                    <Card.Body style={{textAlign:"center"}}>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                        Author: username
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="8">
                <br/>
                <p>about the recipe</p>
                <br/>
                <h6>Nutrition</h6>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>KCAL</th>
                            <th>Fat</th>
                            <th>Saturates</th>
                            <th>Carbs</th>
                            <th>Sugars</th>
                            <th>Fibers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        
                    </tbody>
                </Table>
                <p><AiOutlineClockCircle/> Cooking time:----- <GiSandsOfTime/> Prep time:----- </p>
                <p><AiFillTags/> #tags</p>
            </Col>
            </Row>
            <Row>
                <Col md="6">
                <h4>Ingredients</h4>
                <p>Ingredients</p>
                </Col>

                <Col md="6">
                <h4>Procedure</h4>
                <p>Procedure</p>
                </Col>
            </Row> 
        </div>
    );
  }
  
  export default RecipeInfo;
  