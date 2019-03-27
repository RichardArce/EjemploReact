import React, { Component } from 'react';
import '../styles/Navigation/css_design/design_nav.css';
import '../styles/Navigation/css_structure/structure_nav.css';
import Logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
   <NavLink className="navbar-brand" to="/">
    <img src={Logo} alt="Logo"></img>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Products">Products</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" to="/SendData">Send Data</NavLink>
      </li> 
    </ul>
  </div> 
</nav>
        )
    }
}
export default Navigation;