import './App.css';

import Add from "./Components/Add.js"
import SliderImages from "./Components/SliderImages"
import CardSlider from "./Components/CardSlider.js"
import Header from './Components/Header';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div>
      <Header/>
      <Container style={{padding:" 0px 80px", marginTop:"30px"}}>
      <SliderImages/>
      <br/>
      <hr></hr>
      <h2>Recipes you will like:-</h2>
      <CardSlider/>
      <Add/>
    </Container>
    </div>
    
  );
}

export default App;
