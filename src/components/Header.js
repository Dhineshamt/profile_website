import React, { Component } from "react"; // To Do - Learn
import Menu from "./Menu";

export const Header = () => {
    return (
        <div className="header-container">
            <div>
                <svg preserveAspectRatio="none" data-bbox="0 5 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200" role="img">
                    <g>
                        <path fill="#005085" d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                    </g>
                </svg>
                <span className="primary-text m-left" >
                    Dhinesh A<span className="designation">Lead Software Engineer</span></span>
                <span className="menu">
                    <Menu />
                    
                </span>
            </div>
        </div>
    )
}
