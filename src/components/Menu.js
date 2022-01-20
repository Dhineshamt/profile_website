import { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';


//To Do - Put menu components to this component
export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mssg: ""
          };
        this.handleClick = this.handleClick.bind(this);
        // this.changeTitle = this.changeTitle.bind(this);
    
        this.handleClick();
    }
    
      handleClick = () => {
        this.setState({ mssg: "Hi there!" });
        console.log(this.state.mssg );
      };

    render() {
        return (
            
                <div className="topnav">
                    {/* <BrowserRouter> */}
                    <nav>
                        <Link to='/home'>Home</Link>

                        <Link to='/skills'>Skills</Link>
                        <Link to='/certification'>Certification</Link>
                        <Link to='/experience'>Experience and Education</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/Contact'>Contact</Link>
                        {/* <Link to='/Contact' onClick={this.forceUpdate}>Contact</Link> */}
                        </nav>
                    {/* </BrowserRouter> */}
                </div>
            
        )
    }
}
