import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <>
                <div className="footer">
                    <div>
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faMobileAlt} size="" />
                        </span>
                        <span className="m-left">9944991706</span>
                    </div>
                    <div>
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faAt} />
                        </span>
                        <span className="m-left">dhineshamt@gmail.com</span>
                    </div>
                    <div>
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </span>
                        <span className="m-left">dhinesh@linkedin</span>
                    </div>
                    <div>
                        <button className="download-button">Download Profile</button>
                    </div>
                </div>
            </>
    )
}