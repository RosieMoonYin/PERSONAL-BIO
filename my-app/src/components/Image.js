import stones from "../Images/stones.jpg";
const ImageDisplay = () => {
    return (
       <div>
            <img src={stones} alt="Pile of stones" height={400} width={250}/>
       </div>
    );
};

export default ImageDisplay;