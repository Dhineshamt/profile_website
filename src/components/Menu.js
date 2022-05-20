import { Component, Fragment, useState } from "react";
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconClass: 'nav'
    }
    this.expandIcon = this.expandIcon.bind(this);
  }

  expandIcon() {
    if (this.state.iconClass === 'nav') {
      this.setState({ iconClass: "nav expand-menu" })
    } else {
      this.setState({ iconClass: "nav" })
    }
  }
  render() {
    return (
      <Fragment> 
        <span className={this.state.iconClass}>
        <a href="javascript:void(0)" className="icon" onClick={this.expandIcon}>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
          <NavLink to='/certification'>Certification</NavLink>
          <NavLink to='/experience'>Experience</NavLink>
          <NavLink to='/education'>Education</NavLink>
        </span>

      
      </Fragment>

    )
  }
}
