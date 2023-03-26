import React from 'react';
import { follow, unfollow, requestUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Preloader/Preloader.js';
import { compose } from 'redux';
import { getUsers , getCurrentPage, getFollowingInProgress, getIsLoading, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';
class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanget = (pageNamber) => {
      this.props.requestUsers(pageNamber, this.props.pageSize);
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
                  followingInProgress={this.props.followingInProgress}
               />
            )
         }
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isLoading: getIsLoading(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default compose(
   connect(mapStateToProps, { follow, unfollow, requestUsers })
)(UsersContainer)