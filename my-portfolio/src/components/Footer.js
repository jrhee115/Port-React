import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-insta">
                <p className="footer-insta-view">
                    Hi 
                </p>
            </section>

            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Github</Link>
                        <Link to="/">LinkedIn</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Github</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            JR
                        </Link>
                    </div>
                    <small className="website-rights">JR © 2021</small>
                    <div className="social-icon">
                        <Link className="social-icon-link Instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                                <i className="fab fa-Instagram-f" />
                        </Link>
                        <Link className="social-icon-link Github"
                            to="/"
                            target="_blank"
                            aria-label="Github">
                                <i className="fab fa-Github-f" />
                        </Link>
                        <Link className="social-icon-link LinkedIn"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn">
                                <i className="fab fa-LinkedIn-f" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
