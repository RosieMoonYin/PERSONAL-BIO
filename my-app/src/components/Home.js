//arrow function is a nice thing most modern react projects do  like this
//Home handles all UI

import Footer from "./Footer";
import ImageDisplay from "./Image";


const Home = () => {

    return (
        //top level element
        <div className="container">
            <h1 className="HomepageTitle">Rosie Moon Yin.</h1>
            <p className="HomepageSubtitle">REACT JSX / 
                JAVASCRIPT / 
                CSS / 
                HTML / 
                CREATIVE PORTFOLIO / 
                TO DO: Modal-pop up alert box!
                contact for which returns info
                design better
                optional:
                external links in footer?</p>
            <ImageDisplay></ImageDisplay>
        </div>

)};

//EXPORT -otherwise you cannot import at APP.js
export default Home;