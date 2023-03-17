import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoading, toggleFollowingProgress } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Preloader/Preloader.js';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsLoading(true);

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
         })
   }

   onPageChanget = (pageNamber) => {
      this.props.setCurrentPage(pageNamber);
      this.props.toggleIsLoading(true)

      usersAPI.getUsers(pageNamber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items)
         })
   }

   render() {

      return <>
         {
            this.props.isLoading ? (<Preloader />) : (
               <Users
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanget={this.onPageChanget}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}
                  followingInProgress={this.props.followingInProgress}
               />
            )
         }
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
      followingInProgress: state.usersPage.followingInProgress
   }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoading, toggleFollowingProgress }
)(UsersContainer)