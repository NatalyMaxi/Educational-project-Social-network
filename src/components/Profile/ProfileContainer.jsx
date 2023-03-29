import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { withRouter } from '../hoc/withRouter';
import { compose } from 'redux';
class ProfileContainer extends React.Component {

   refreshProfile() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = this.props.autorizedUserId;
         if (!userId) {
            this.props.router.navigate('/login');
         }
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.router.params.userId !== prevProps.router.params.userId) {
         this.refreshProfile()
      }

   }

   render() {
      return (
         <Profile
            {...this.props}
            isOwner={!this.props.router.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      autorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth,
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
   withRouter,
   withAuthRedirect
)(ProfileContainer)

// compose(
//    connect(mapStateToProps, { getUserProfile }),
//    withRouter,
//    withAuthRedirect
// )(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlContainerComponent = withRouter(AuthRedirectComponent)