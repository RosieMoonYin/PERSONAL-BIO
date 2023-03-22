import stones from "../Images/stones.jpg";

const About =() => { 
return (
    <div className="about">
            <h2>About me:</h2>
            <p>Hello I am Rosie Moon Yin. 
            Artist, Yogi and Code enthusiast. 
            For the past 8 months, I have been studying Javascript, React, JSX, HTML and CSS. 
            My dream is to work as a Front End Developer.</p>
            <div>
                  <img src={stones} alt="Pile of stones" height={400} width={250}/>
            </div>
            <p>Second paragraph</p>
            <div>
            <img src={stones} alt="Pile of stones" height={400} width={250}/>
            </div>
    </div>
     )}

export default About;
