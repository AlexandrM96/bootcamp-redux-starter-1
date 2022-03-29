import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styles.css";


class Header extends Component {
  render() {
    return (
      <nav className="navigation">
        <h1 className="navigation__header">
          Electronics E-shop
        </h1>
        <div className="navigation__container">
          <Link to={"/home"} className="navigation__link">
          <p className="navigation__paragraf">Home</p>
          </Link>
          <Link to={'/order'}  className="navigation__link">
          <p className="navigation__paragraf">Order</p>
          </Link>
          <Link to={'/'}  className="navigation__link">
          <p className="navigation__paragraf">Info</p>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;