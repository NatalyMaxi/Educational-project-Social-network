import React from 'react';
import { follow, unfollow,  getUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Preloader/Preloader.js';
import { withAuthRedirect } from '../hoc/withAurhRedirect'
import { compose } from 'redux';
class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanget = (pageNamber) => {
      this.props.getUsers(pageNamber, this.props.pageSize);
      // this.props.setCurrentPage(pageNamber);
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
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
      followingInProgress: state.usersPage.followingInProgress
   }
}

export default compose(
   withAuthRedirect,
   connect(mapStateToProps, { follow, unfollow, getUsers })
)(UsersContainer)

// export default withAuthRedirect (connect(mapStateToProps, { follow, unfollow, getUsers })(UsersContainer))