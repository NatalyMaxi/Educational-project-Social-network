import React from "react";
import classes from "./UserItem.module.css";
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {

   let path = '/dialogs/' + props.id;

   return (
      <li className={classes.user}><div className={ classes.user__avatar} alt='avatar'></div>
         <NavLink to={path} className={navData => navData.isActive ? classes.user__item_active : classes.user__item}>{props.name }</NavLink>
      </li>
   );
}

export default UserItem;
