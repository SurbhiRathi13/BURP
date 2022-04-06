import Add from './Add.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//icons
import { AiOutlineDislike } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineLike } from 'react-icons/ai'

import { AiOutlineClockCircle } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { AiFillTags } from "react-icons/ai";
function RecipeInfo() {
    return (
        <Container style={{marginBottom:"10px"}}>
            
        {/* <div> */}
            <h1 style={{textAlign:"center"}}> Name of the recipe</h1>
            <Row>
            <Col lg="4">
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
            <Col lg="7" >
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
            {/* <div style={{textAlign:"right",display:"flex", width:"100px",bottom:"-20%"}}> */}
            <div style={{textAlign:"right"}}>
                <AiOutlineLike />{' '}<AiOutlineDislike  />{' '}<BiCommentDetail />{' '}<FiEdit />
            </div>
            {/* <div >
                <span style={{height:"30px", width:"30px"}}><AiOutlineLike size="2x"/></span>
                <span style={{height:"30px", width:"30px"}}><AiOutlineDislike  size="2x"/></span>
                <span style={{height:"30px", width:"30px"}}><BiCommentDetail size="2x"/></span>
                <span style={{height:"30px", width:"30px"}}><FiEdit size="2x" /></span>
            </div> */}
            
            {/* <div class="icons">
                <p style={{height:"30px"}}><AiOutlineLike size="lg"/>{' '}<AiOutlineDislike size="1.5x" />{' '}<BiCommentDetail size="1.5x"/>{' '}<FiEdit size="1.5x"/></p>
            </div> */}

            </Row>
            <br/>
            <hr></hr>
            <br/>
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
            <div>
                <h2>Comments</h2>
                <p>Have your say here!</p>
                <br/>
                <h3>Leave a Comment...</h3>
                <Form.Group className="mb-3" controlId="formGridText">
                    {/* <Form.Label></Form.Label> */}
                    <Form.Control placeholder="Comment"/>
                </Form.Group>
                <div style={{ display: "flex" }}>
                    <Button style={{ marginLeft: "auto" }} variant="success" type="submit">Send</Button>
                </div>
                {/* <Button style={{alignItems:"right"}} variant="success" type="submit">
                    Send
                </Button> */}
               
            {/* <br/><br/> */}
            </div>
            <Add/>
        </Container>

    );
  }
  
  export default RecipeInfo;
  