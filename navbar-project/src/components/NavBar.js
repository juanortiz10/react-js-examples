import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css'

class NavBar extends Component {
  render(){
    return(
      <div className="container-fluid">
       <div className="row">
         <nav className="navbar navbar-default navbar-fixed-side-left" role="navigation">
           <div className="navbar-header">
            <button type="button" className="pull-left navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Desplegar navegacion</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-logobox">
              <a href="/">
                <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo"/>
              </a>
            </div>
           </div>
           <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="navbar-listitem"><Link to="/">Home</Link></li>
              <li className="navbar-listitem"><Link to="/bio">Bio</Link></li>
              <li className="navbar-listitem"><Link to="/description">Description</Link></li>
              <li className="navbar-listitem"><Link to="/contact-us">Contact Us</Link></li>
            </ul>
           </div>
         </nav>
       </div>
      </div>
    );
  }
}

export default NavBar;
