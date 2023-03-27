import React from "react";
import classes from './Input.module.css';

const Input = ({ input, meta, ...props }) => {
   //debugger;

   const hasError = meta.touched && meta.error

   return (
      <>
         <input {...input} {...props} className={hasError ? `${classes.textarea} ${classes.textareaError}` : `${classes.textarea}`} />
         {
            hasError && <span className={classes.error}>{meta.error}</span>
         }

      </>
   )
}

export default Input;