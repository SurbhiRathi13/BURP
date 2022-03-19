import './App.css';

// import BsInstagram from "react-icons/fa";
import Header from "./Components/Header.js"
import SliderImages from "./Components/SliderImages"
import CardSlider from "./Components/CardSlider.js"
import Footer from "./Components/Footer.js"

function App() {
  return (
    <div>
      <Header/>
      <SliderImages/>
      <br/>
      <hr></hr>
      <CardSlider/>
      <Footer/>
    </div>
  );
}

export default App;
