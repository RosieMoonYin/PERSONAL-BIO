
import Logo from "./Logo";

const Header = () => {
    return ( 
    <header>
        <div>
            <Logo />
        </div>
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Resume
                </li>
                <li>
                    GitHub
                </li>
            </ul>
        </nav>
    </header> )
};

export default Header;