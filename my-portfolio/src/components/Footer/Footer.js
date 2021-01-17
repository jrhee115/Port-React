import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>About Me</h2>
                        <Link to="/portfolio">Photography</Link>
                        <Link to="/project">Coding</Link>
                    </div>
                    
                    <div class="footer-link-items">
                        <h2>Contact</h2>
                        <Link to="/about">Contact Me</Link>
                        <Link to="/"></Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            JR <i class="fas fa-bahai" />
                        </Link>
                    </div>
                    <small class="website-rights">JR © 2021</small>
                    {/* <div class="social-icons">
                        <Link class="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link class="social-icon-link github"
                            to="/"
                            target="_blank"
                            aria-label="Github">
                            <i class="fab fa-github" />
                        </Link>
                        <Link class="social-icon-link linkedIn"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn">
                            <i class="fab fa-linkedin" />
                            
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Footer
