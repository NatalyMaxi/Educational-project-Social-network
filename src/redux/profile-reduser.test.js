import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
   posts: [
      { id: 1, message: 'Blabla', likesCount: '3' },
      { id: 2, message: 'Hi', likesCount: '23' },
      { id: 3, message: 'Axaxa', likesCount: '3' },
      { id: 4, message: 'Yo', likesCount: '0' },],
}

it('the length should increase', () => {//длина должна увеличиться
   // исходные данные
   let action = addPost('my post');

   // добавляем какой-то action
   let newState = profileReducer(state, action)
   // ожидаем получить
   expect(newState.posts.length).toBe(5);
});

it('the message should be "my post"', () => {//сообщение должно быть "мой пост"
   // исходные данные
   let action = addPost('my post');

   // добавляем какой-то action
   let newState = profileReducer(state, action)
   // ожидаем получить
   expect(newState.posts[4].message).toBe('my post');
});

it('after deleting the message, the length of the array will decrease', () => {//после удаления сообщения длина массива уменьшится
   // исходные данные
   let action = deletePost(1);

   // добавляем какой-то action
   let newState = profileReducer(state, action)
   // ожидаем получить
   expect(newState.posts.length).toBe(3);
});

it('after deleting with an incorrect id, the length of the array does not change', () => {//после удаления с некорректным id длина массива не меняется
   // исходные данные
   let action = deletePost(100);

   // добавляем какой-то action
   let newState = profileReducer(state, action)
   // ожидаем получить
   expect(newState.posts.length).toBe(4);
});

