import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
    return (
        <div className="home fade-in-image">
            <div className="profile-quote profile-img">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <span className="m-left ">
                         As an enthusiastic and creative technologist with hands-on skills in a wide range of software, tools, and programming languages, I am well positioned to leverage my abilities and qualifications to thrive as Front-end Developer.
                </span>
                <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div >
                <img src="../../assets/profile-1.jpg" alt="Profile picture" className="profile-pic" />
            </div>

        </div>
    )
}