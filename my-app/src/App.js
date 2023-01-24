import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import React from "react";
//bootstrap link

//halfway through routing video!!!
function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/About" element={<About />}/>
          <Route path= "/ContactForm" element={<ContactForm />}/>
          <a href url="https://github.com/RosieMoonYin">GitHub</a>
        </Routes>
      </div> 
    </BrowserRouter>
 
  );
};

export default App;