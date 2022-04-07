import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import AddRecipe from './Components/AddRecipe.js'
// import Header from "./Components/Header.js"
// import HeaderLoggedIn from "./Components/HeaderLoggedIn.js"
import Footer from "./Components/Footer.js"
import SignUp from "./Components/SignUp.js"
import Profile from "./Components/Profile"
import RecipeInfo from "./Components/RecipeInfo"
import LoginPage from "./Components/LoginPage"
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* <Header/> */}
    {/* <HeaderLoggedIn/> */}
    <Routes>
      <Route exact path="/" element={<App />}/>
        <Route exact path="/addRecipePage" element={<AddRecipe />} />
        <Route exact path="/SignUpPage" element={<SignUp />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/RecipeInfo" element={<RecipeInfo />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      {/* </Route> */}
    </Routes>
      <Footer/>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
