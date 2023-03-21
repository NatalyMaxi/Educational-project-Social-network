import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode = () => {
      console.log(this.state.editMode) // false
      this.setState({ editMode: true }) //setState асинхронен, сначала выполнятся консоли, потом стэйт поменяется
      console.log(this.state.editMode) // false
   }

   deActivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status,
         })
}
   }

   render() {
      return (<div className={classes.status}>
         {
            !this.state.editMode ?
               (
                  <div>
                     <span
                        onDoubleClick={this.activateEditMode}>{this.props.status || 'Введите статус'}</span>
                  </div>
               ) :
               (
                  <div>
                     <input
                        type="text"
                        autoFocus={true}
                        onBlur={this.deActivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                     /></div>
               )
         }
      </div>);
   }

}

export default ProfileStatus;

