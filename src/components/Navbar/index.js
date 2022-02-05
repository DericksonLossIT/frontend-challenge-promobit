import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './styles.css'


const Navbar = () => {
  return (
      <div className="navbar">
        <Logo className="navbar-logo" title="TMDB logo"/>
      </div>
  );
};

export default Navbar;
