import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import React from "react";
import './App.css'
// import Navbar from"./Components/Navbar.jsx";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {

  return (
    <>



      <Router>
         {/* <Navbar/> */}
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/contact" element={<Contact/>}/>


        </Routes>
          
        
      </Router>
    </>
  )
}

export default App
