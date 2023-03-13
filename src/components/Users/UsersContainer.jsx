import { followCreator, unfollowCreator, setUsersCreator, setCurrentPageCreator, setUsersTotalCountCreator } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Userss';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
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
      },
      setCurrentPage: (pageNamber) => {
         dispatch(setCurrentPageCreator(pageNamber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setUsersTotalCountCreator(totalCount))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

// export default UsersContainer;