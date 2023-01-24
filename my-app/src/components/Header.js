
import {Link} from "react-router-dom";
import Logo from "./Logo";
import ReusableButton from "./ReusableButton";

const Header = () => {
    return ( 
    <header>
        <div>
            <Logo />
        </div>
        <nav className="nav-list">
            <ul className="nav-list">
                <li>
                    <Link className="Links" to = "/"><ReusableButton>Home</ReusableButton></Link>
                </li>
                <li>
                    <Link className="Links" to = "/About"><ReusableButton>About</ReusableButton></Link>
                </li>
                <li>
                    <Link className="Links" to = "/ContactForm"><ReusableButton>Contact</ReusableButton></Link>
                </li>
                <li>
                    <Link className="Links" to ={{pathname: "a/https://github.com/RosieMoonYin/"}} target="_blank" ><ReusableButton>GitHub</ReusableButton></Link>
                   
                </li>
            </ul>
        </nav>
    </header> )
};

export default Header;