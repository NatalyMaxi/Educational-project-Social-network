import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAurhRedirect'
import { compose } from 'redux';

export function withRouter(Children) {
   return (props) => {

      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}
class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.autorizedUserId;
         if (!userId) {
            this.props.history.push('/login')
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