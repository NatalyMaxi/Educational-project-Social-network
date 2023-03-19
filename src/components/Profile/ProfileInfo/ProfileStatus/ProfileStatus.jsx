import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
   // constructor(props) {
   //    super(props);
   // }
   state = {
      editMode: false,
   }
   activateEditMode = () => {
      console.log(this.state.editMode) // false
      this.setState({ editMode: true }) //setState асинхронен, сначала выполнятся консоли, потом стэйт поменяется
      console.log(this.state.editMode) // false
   }
   deActivateEditMode = () => {
      this.setState({ editMode: false })
      console.log(this.state.editMode)
   }
   render() {
      return (<div className={classes.status}>
         {
            !this.state.editMode ?
               (
                  <div>
                     <span
                        onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                  </div>
               ) :
               (
                  <div>
                     <input
                        type="text"
                        autoFocus={true}
                        onBlur={this.deActivateEditMode}
                        value={this.props.status}
                     /></div>
               )
         }
      </div>);
   }

}

export default ProfileStatus;

