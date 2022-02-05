import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './styles.css'


const Header = () => {
  return (
      <nav>
        <Logo className="header-logo" title="TMDB logo"/>
      </nav>
  );
};

export default Header;
