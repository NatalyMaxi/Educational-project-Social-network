import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
