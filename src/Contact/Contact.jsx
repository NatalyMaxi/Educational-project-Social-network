import React from 'react';
import classes from './Contact.module.css';

const Contact = ({ contactTitle, contactValue }) => {
   return (
      <div className={classes.contact}>
         <b className={classes.contact__title}>{`${contactTitle}${': '}`}
         </b>
         <span className={classes.contact__text}>{contactValue}</span>
      </div>
   )
}

export default Contact;