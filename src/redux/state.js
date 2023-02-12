import { rerenderEntireTree } from "../render"

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'Blabla', likesCount: '3' },
         { id: 2, message: 'Hi', likesCount: '23' },
         { id: 3, message: 'Axaxa', likesCount: '3' },
         { id: 4, message: 'Yo', likesCount: '0' },],
   },
   messagesPage: {
      users: [
         { id: 1, name: 'Илья' },
         { id: 2, name: 'Ната' },
         { id: 3, name: 'Оля' },
         { id: 4, name: 'Валя' },
         { id: 5, name: 'Саша' },
      ],
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'Yo' },
         { id: 3, message: 'Привет' },
         { id: 4, message: 'Hi' },
         { id: 5, message: 'Hi' },
      ]
   }
}

/**Добавим сообщение в объкт state
 * 
 * @param {*} postMessage 
 */
export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
   }
   state.profilePage.posts.push(newPost);
   rerenderEntireTree(state)
}

export default state;