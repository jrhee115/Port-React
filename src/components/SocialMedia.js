import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.css"

export default function SocialMedia() {
    return (
        <div class="social-container">
            <h3>My Social Media</h3>
            <a href="https://www.instagram.com/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/feed/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/jrhee115"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>

    );
}