import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <Route path= "/Form" element={<Form />}/>
        </Routes>

        <Footer />
      </div> 
    </BrowserRouter>
 
  );
};

export default App;