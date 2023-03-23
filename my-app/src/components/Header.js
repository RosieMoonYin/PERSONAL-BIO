
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
                    <Link className="Links" to = "/About"><ReusableButton>Projects</ReusableButton></Link>
                </li>
                <li>
                    <Link className="Links" to = "/Form"><ReusableButton>Contact</ReusableButton></Link>
                </li>
                <li>
                    <Link to={{pathname: "https://github.com/RosieMoonYin"}} target="_blank"><ReusableButton>Github</ReusableButton></Link>
                   
                </li>
            </ul>
        </nav>
    </header> )
};

export default Header;