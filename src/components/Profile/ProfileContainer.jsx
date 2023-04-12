import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { withRouter } from '../hoc/withRouter';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
   componentDidMount() {
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

   render() {
      return (
         <Profile {...this.props} />
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
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
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