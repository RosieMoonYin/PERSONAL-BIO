import stones from "../Images/stones.jpg";

const About =() => { 
return (
    <div className="about">
            <h2>About me:</h2>
            <p>Artist, Yogi, Coder: must include 2 images and two paragraphs of text</p>
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
