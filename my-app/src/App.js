import {BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import {useState} from "react";

import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
//bootstrap link

//styling for modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

//halfway through routing video!!!
function App () {
  //code for modal
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/About" element={<About />}/>
          <Route path= "/Form" element={<Form />}/>
          <Route path='/Github' component={() => {
          window.location.href = "https://github.com/RosieMoonYin";
          return null;
          }}/>
        </Routes>
        <button onClick={setModalOpen}>VIEW RESUME</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>Resume IMG goes here *option to download PDF</div>

        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
        <Footer />
      </div> 
    </BrowserRouter>
 
  );
};



export default App;