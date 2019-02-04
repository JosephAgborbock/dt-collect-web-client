import React, { Component } from 'react';
import './../assets/styles/Header.css';

class Header extends Component {
  render() {
    return(                           
      <nav>
        <h2 className="logo">DEVC<br/>BUEA</h2>
          <ul>
            <li><a href="#home"></a>Home</li>
            <li><a href="#create account"></a>Create Account</li>
            <li><a href="#about us"></a>About Us</li>
            <li><a href="#contact us"></a>Contact Us</li>
          </ul>
      </nav>
    
    );
  }
}

export default Header;