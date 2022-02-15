import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

//const Navbar = (props) => {
const Navbar = ({ icon, title }) => {
  // render() {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {/* <i className={props.icon} /> {props.title} */}
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          {/* <a href='/'>Home</a> */}
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
  // }
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
