import React, { Component } from "react"; // To Do - Learn
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default class Header extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         iconClass: 'icon collapse-menu'
    //     }

    //     this.expandIcon = this.expandIcon.bind(this);
    // }

    // expandIcon() {
    //     if (this.state.iconClass === 'icon collapse-menu') {
    //         this.setState({ iconClass: "icon expand-menu" })
    //     } else {
    //         this.setState({ iconClass: "icon collapse-menu" })
    //     }

    // }


    render() {
        return (
            <div className="header-container">
                
                    <span className="circle-icon">
                        <svg preserveAspectRatio="none" data-bbox="0 5 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200" role="img">
                            <g>
                                <path fill="#005085" d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                            </g>
                        </svg>
                    </span>
                    <span className="primary-text m-left" >
                        Dhinesh A<span className="designation">Lead Software Engineer</span></span>                    
                        <Menu />                  
            </div>
        )

    }
}
