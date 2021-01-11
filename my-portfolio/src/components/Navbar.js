import React, {useState} from 'react'


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        JR <i className="fab.fa-typo3" /> 
                    </Link>
                    <div className="menu-icon">
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
