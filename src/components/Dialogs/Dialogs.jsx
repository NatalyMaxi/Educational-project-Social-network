import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
   return (
      <div className={classes.dialogs}>
         <ul className={classes.dialogs__items}>
            <li>
               <NavLink to='/dialogs/1' className={navData => navData.isActive ? classes.dialogs__item_active : classes.dialogs__item}>Ната</NavLink>
            </li>
            <li>
               <NavLink to='/dialogs/2' className={navData => navData.isActive ? classes.dialogs__item_active : classes.dialogs__item}>Иля</NavLink>
            </li>
            <li>
               <NavLink to='/dialogs/3' className={navData => navData.isActive ? classes.dialogs__item_active : classes.dialogs__item}>Оля</NavLink>
            </li>
         </ul>

         <ul className={classes.dialogs__messages}>
            <li className={classes.dialogs__message}>Hi</li>
            <li className={classes.dialogs__message}>Hi</li>
            <li className={classes.dialogs__message}>Hi</li>
         </ul>

      </div>
   );
};

export default Dialogs;
