import React from "react";
import classes from './Textarea.module.css';

const Textarea = ({ input, meta, ...props }) => {
   //debugger;

   const hasError = meta.touched && meta.error

   return (
      <>
         <textarea {...input} {...props} className={hasError ? `${classes.textarea} ${classes.textareaError}` : `${classes.textarea}`} />
         {
            hasError && <span className={classes.error}>{meta.error}</span>
         }
         
      </>
   )
}

export default Textarea;