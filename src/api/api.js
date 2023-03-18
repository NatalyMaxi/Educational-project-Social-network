import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: '2afe739f-c21f-4fb5-8d0e-e1a467d3c73b',

})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) { // по умолчанию присваиваем currentPage = 1 и для pageSize = 10
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`, {})
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
}

}
