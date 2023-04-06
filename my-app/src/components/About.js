import stones from "../Images/stones.jpg";

const About =() => { 
return (
    <div className="about">
            <h2>About me:</h2>
            <p>Hello I am Rosie Moon Yin.
            Artist, Yogi and Code enthusiast. 
            I am a deep thinking and problem solving individual. For the past 8 months I studied Javascript, React, JSX, HTML and CSS. 
            My dream is to work as a Web Developer, I have a passion for writing and debugging code and a desire to deepen my understanding of Javascript and REACT, and expand into new languages in the future.</p>
            <div>
                  <img src={stones} alt="Pile of stones" height={400} width={250}/>
            </div>
            <p>Outside of my tech studies I love to meditate, practice yoga and dance. I have been teaching yoga for the past few years; its a big part of my life. I am also a keen runner, right now I am focused on training for the stockholm marathon in June. 
             On rest days I love to illustrate my dreams using midjourney AI and listen to Sam Harris podcasts. I have a bachelors degree in Fine Art and a naturally creative mind.</p>
            <div>
            <img src={stones} alt="Pile of stones" height={400} width={250}/>
            </div>
    </div>
     )}

export default About;
