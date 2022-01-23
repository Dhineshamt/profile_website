import { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom';


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
    console.log(this.state.mssg);
  };

  render() {
    return (

      <div className="nav">
        {/* <BrowserRouter> */}
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/certification'>Certification</NavLink>
        <NavLink to='/experience'>Experience and Education</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        {/* <Link to='/Contact' onClick={this.forceUpdate}>Contact</Link> */}
        {/* </BrowserRouter> */}
      </div>

    )
  }
}
