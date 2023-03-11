import { followCreator, unfollowCreator, setUsersCreator ,} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersCreator(users))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;