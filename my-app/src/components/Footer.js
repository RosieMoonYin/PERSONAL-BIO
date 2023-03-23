import {Link} from "react-router-dom";
import Logo from "./Logo";
import ReusableButton from "./ReusableButton";

const Footer = () => {
    return ( 
    <footer>
        <nav className="foot-list">
            <ul className="foot-list">
                <li>
                    <Link className="Links" to = "/"><Logo /></Link>
                </li>
                <li>
                    <Link className="Links" to = "/About">PROJECTS</Link>
                </li>
                <li>
                    <Link className="Links" to = "/Form">CONTACT ME</Link>
                </li>
                <li>
                    <Link to={{pathname: "https://github.com/RosieMoonYin"}} target="_blank">GITHUB</Link>
                   
                </li>
                <li>
                    <p>ROSIEMOONYIN ALL RIGHTS RESERVED. 2023</p>
                </li>
            </ul>
        </nav>
    </footer> )
};

export default Footer;