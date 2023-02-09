import React from 'react';
import classes from './Header.module.css'
import logo from "../../images/logoCat-min.png";

const Header = () => {
  return (
      <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="Логотип" />
      </header>
  );
}

export default Header;