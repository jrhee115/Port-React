import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        JR <i className="fab.fa-typo3" /> 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i classNane={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className ={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to ="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/project" className="nav-links" onClick={closeMobileMenu}>
                                Project
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
