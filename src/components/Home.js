import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
    return (
        <div className="home fade-in-image">
            <div className="profile-quote profile-img">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <span className="m-left ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. 
                </span>
                <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div >
                <img src="../../assets/profile.jpg" alt="Profile picture" className="profile-pic"/>
            </div>

        </div>
    )
}