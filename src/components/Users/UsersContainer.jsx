import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoading } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Preloader/Preloader.js';


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
         withCredentials: true
      })
         .then(response => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
         })
   }

   onPageChanget = (pageNamber) => {
      this.props.setCurrentPage(pageNamber);
      this.props.toggleIsLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`, {
         withCredentials: true
      })
         .then(response => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(response.data.items)
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
   }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoading, }
)(UsersContainer)