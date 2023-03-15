const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
   users: [
      // { id: 1, photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-145-27.jpeg', followed: true, fullName: 'Илюсик', status: 'I am a boss', location: { city: 'Тюмень', country: 'Россия' } },
      // { id: 2, photoUrl: 'https://webmg.ru/wp-content/uploads/2022/05/1625736517_12-kartinkin-com-p-kotyata-anime-anime-krasivo-14.jpg', followed: true, fullName: 'Натусик', status: 'I am a macovka', location: { city: 'Тюмень', country: 'Россия' } },
      // { id: 3, photoUrl: 'https://i.pinimg.com/originals/6d/47/05/6d4705c7c8fb464de36cab7e4c0f6561.jpg', followed: true, fullName: 'Зевс', status: 'I am a cat', location: { city: 'Тюмень', country: 'Россия' } },
      // { id: 4, photoUrl: 'https://www.fonstola.ru/images/201212/fonstola.ru_84796.jpg', followed: false, fullName: 'Валера', status: 'I am ...', location: { city: 'Мадрид', country: 'Испания' } },
   ],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user;
            })
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user;
            })
         }
      }
      case SET_USERS: {
         return {
            ...state,
            users: action.users
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         }
      }
      default:
         return state;
   }
}

export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export default usersReducer;