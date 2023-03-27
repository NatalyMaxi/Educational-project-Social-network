import React from 'react';
import classes from './Header.module.css'
import logo from "../../images/logoCat-min.png";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt='Логотип' />
      <div className={classes.header__login}>
        {props.isAuth
          ? <div>
            <span>{props.login}</span>
            <button onClick={props.logout}>
              Выйти
            </button>
          </div>
          : <NavLink to='/login'>Login</NavLink>}

      </div>
    </header>
  );
}

export default Header;