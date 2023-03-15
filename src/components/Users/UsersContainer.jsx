import { followCreator, unfollowCreator, setUsersCreator, setCurrentPageCreator, setUsersTotalCountCreator } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import React from 'react';

class UsersContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanget = (pageNamber) => {
      this.props.setCurrentPage(pageNamber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }
   render() {
      return <Users
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onPageChanget={this.onPageChanget}
         users={this.props.users}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
      />
   }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)