import { Link } from "react-router-dom";
import './navigation.style.css';
import logo from '../../assets/mlogo.svg'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                <span><Link to="/">My portfolio</Link></span>
                    <Link to="/">
                        <img src={logo} alt="My Portfolio Logo" className="logo" />
                    </Link>
                <nav className="navigation_list">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/works">Works</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;