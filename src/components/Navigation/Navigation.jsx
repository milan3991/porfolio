import { useState } from "react";
import { Link } from "react-router-dom";
import './navigation.style.css';
import logo from '../../assets/mlogo.svg';
import burgerIcon from '../../assets/burger.svg';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                <span><Link to="/">My portfolio</Link></span>
                <Link to="/">
                    <img src={logo} alt="My Portfolio Logo" className="logo" />
                </Link>

                <button className={`burger ${menuOpen ? 'rotate' : ''}`} onClick={toggleMenu}>
                    <img src={burgerIcon} alt="Burger menu" />
                </button>
                <nav className={`navigation_list ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/works" onClick={() => setMenuOpen(false)}>Works</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;