const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
   users: [
      // { id: 1, photoUrl: 'https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg', followed: true, fullName: 'Илья', status: 'I am a boss', location: { city: 'Тюмень', country: 'Россия' } },
      // { id: 2, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/d4/d4e66fe3adbadc49d637c0e804f1e629.jpeg', followed: true, fullName: 'Наталья', status: 'I am a macovka', location: { city: 'Тюмень', country: 'Россия' } },
      // { id: 3, photoUrl: 'https://a.d-cd.net/f10fab5s-1920.jpg', followed: true, fullName: 'Зевс', status: 'I am a cat', location: { city: 'Тюмень', country: 'Россия' } },
      // { id: 4, photoUrl: 'https://www.fonstola.ru/images/201212/fonstola.ru_84796.jpg', followed: false, fullName: 'Олег', status: 'I am ...', location: { city: 'Мадрид', country: 'Испания' } },
   ]
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
            users: [...state.users, ...action.users]
         }
      }
      default:
         return state;
   }
}

export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer;