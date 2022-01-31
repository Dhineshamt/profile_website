import { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconClass: 'nav collapse-menu'
    }
    this.expandIcon = this.expandIcon.bind(this);
  }

  expandIcon() {
    if (this.state.iconClass === 'nav collapse-menu') {
      this.setState({ iconClass: "nav expand-menu" })
    } else {
      this.setState({ iconClass: "nav collapse-menu" })
    }
  }
  render() {
    return (
      <div className="menu">
         <span>
          <button className="icon" onClick={this.expandIcon}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </span>
        <div className={this.state.iconClass}>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
          <NavLink to='/certification'>Certification</NavLink>
          <NavLink to='/experience'>Experience and Education</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>

        </div>

      </div>

    )
  }
}
