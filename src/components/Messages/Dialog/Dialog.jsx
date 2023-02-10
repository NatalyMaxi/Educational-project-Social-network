import React from "react";
import classes from "./Dialog.module.css";


const Dialog = (props) => {

   return (
      <li className={classes.message}>{props.message}</li>
   );
};

export default Dialog;
