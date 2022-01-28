import { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


//To Do - Put menu components to this component
export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconClass: 'icon collapse-menu'
    }
    this.expandIcon = this.expandIcon.bind();
  }

  expandIcon() {
    if (this.state.iconClass === 'icon collapse-menu') {
      this.setState({ iconClass: "icon expand-menu" })
    } else {
      this.setState({ iconClass: "icon collapse-menu" })
    }

  }
  render() {
    return (
      <div className="nav">
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/certification'>Certification</NavLink>
        <NavLink to='/experience'>Experience and Education</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <button className={this.state.iconClass} onClick={this.expandIcon}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

    )
  }
}
