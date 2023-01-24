//arrow function is a nice thing most modern react projects do  like this
//Home handles all UI

import Footer from "./Footer";
import ImageDisplay from "./Image";


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
            <ImageDisplay></ImageDisplay>
            <Footer />
        </div>

)};

//EXPORT -otherwise you cannot import at APP.js
export default Home;