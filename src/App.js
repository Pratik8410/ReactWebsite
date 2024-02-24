import React from 'react';
import { Routes, Route, } from "react-router-dom"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/service' element={<Service />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
