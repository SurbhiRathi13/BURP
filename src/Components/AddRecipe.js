import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddRecipe() {
  return (
    <div>
        <Form style={{padding:"50px"}}>
            <h1 style={{ marginBottom:"20px"}}>New Recipe</h1>
            <h2 class="heading2">Details</h2>
            <Row className="mb-3">
                <Form.Group md={6} as={Col} controlId="formGridEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="email" placeholder="example01@gmail.com" />
                </Form.Group>

                <Form.Group md={6} as={Col} controlId="formGridPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title of the Recipe" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridText">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="About the recipe"/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Recipe Image</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <hr></hr>
            <h2 class="heading2">Filters</h2>
            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Traditional</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>
                
                <Form.Group md={4} as={Col} controlId="formGridState">
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group md={4} as={Col} controlId="formGridState">
                    <Form.Label>Course</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            
            </Row>

            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Mood</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Casual</option>
                    <option>Comfort</option>
                    <option>Happy</option>
                    <option>Family Friendly</option>
                    <option>Pocket Friendly</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Diet</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Low Fat</option>
                    <option>Low Calorie</option>
                    <option>Veg</option>
                    <option>Vegan</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Skills</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Kids</option>
                </Form.Select>
            </Form.Group>
            </Row>
            <hr></hr>
            <h2 class="heading2">Times</h2>
            <Row>
                <Col md={6}>
                    <Form.Label>No. of Servings</Form.Label>
                    <Form.Control placeholder="Serves" />
                </Col>
                <Col md={6}>
                    <Form.Label>Cooking Time</Form.Label>
                    <Form.Control placeholder="Cook" />
                </Col>
                
            </Row>
            
            <hr></hr>
            <h2 class="heading2">Instructions</h2>
            <input type="text" className=""></input>
                <Row id="survey_options">
                    <input as="Col" type="text" name="survey_options[]" className="survey_options" size="50" />
                    <input as="Col" type="text" name="survey_options[]" className="survey_options" size="50" />
                    
                </Row>
                <Row class="controls">
                    <a href="#" id="add_more_fields">Add Instruction</a>
                    <a href="#" id="remove_fields">Remove Last</a>
                </Row>
            <hr></hr>
            <h2 class="heading2">Ingredients</h2>
            {/* <input type="text" className=""></input> */}
            <hr></hr>
            <h2 class="heading2">Nutrition</h2>
            <Row>
                <Col md={2}>
                    <Form.Label>KCal</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fat</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Saturates</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Sugar</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fibre</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
            </Row>
            <hr></hr>
            <Button style={{margin:"10px"}} variant="success" type="submit">
                Save
            </Button>
            <Button style={{margin:"10px"}} variant="success" type="submit">
                Reset
            </Button>
        </Form>       
    </div>
  );
}

export default AddRecipe;
