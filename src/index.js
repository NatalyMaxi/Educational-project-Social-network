import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './/components/App/App';
import * as serviceWorker from './serviceWorker';

let posts = [
   { id: 1, message: 'Blabla', likesCount: '3' },
   { id: 2, message: 'Hi', likesCount: '23' },
   { id: 3, message: 'Axaxa', likesCount: '3' },
   { id: 4, message: 'Yo', likesCount: '0' },
]

let users = [
   { id: 1, name: 'Илья' },
   { id: 2, name: 'Ната' },
   { id: 3, name: 'Оля' },
   { id: 4, name: 'Валя' },
   { id: 5, name: 'Саша' },
]

let messages = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'Yo' },
   { id: 3, message: 'Привет' },
   { id: 4, message: 'Hi' },
   { id: 5, message: 'Hi' },
]

ReactDOM.render(<App posts={posts} users={users} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
