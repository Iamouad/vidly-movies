import React from 'react';

const NavBar = (props) => {
  return (  <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="s">Navbar {props.nbItems}</a>
      </nav> );
}
 
export default NavBar;
