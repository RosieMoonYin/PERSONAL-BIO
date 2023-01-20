//arrow function is a nice thing most modern react projects do  like this
//Home handles all UI

import About from "./About";
import Footer from "./Footer";
import ImageDisplay from "./Image";
import ReusableButton from "./ReusableButton";
import ContactForm from "./ContactForm";


const Home = () => {

    return (
        //top level element
        <div className="container">
            <h1>Rosie Moon Yin.</h1>
            <p>REACT JSX / 
                JAVASCRIPT / 
                CSS / 
                HTML / 
                CREATIVE PORTFOLIO / </p>        
            <About />
            <ContactForm />
            <ReusableButton>Resume</ReusableButton>
            <ReusableButton>Projects</ReusableButton>
            <ReusableButton>GitHub</ReusableButton>
            <ReusableButton>Contact</ReusableButton>
            <ImageDisplay></ImageDisplay>
            <Footer />
        </div>

)};

//EXPORT -otherwise you cannot import at APP.js
export default Home;