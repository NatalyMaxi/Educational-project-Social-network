import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Messages from '../Messages/Messages';
import Profile from '../Profile/Profile';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings'

const App = (props) => {

  return (
      <div className='page'>
        <Header />
        <Navbar />
        <div className='page__content'>
          <Routes>
            <Route path='/profile'
              element={<Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />}
            />
            <Route path='/dialogs/*'
              element={<Messages
                state={props.state.messagesPage}
              />}
            />
            <Route path='/news'
              element={<News />}
            />
            <Route path='/music'
              element={<Music />}
            />
            <Route path='/settings'
              element={<Settings />}
            />
          </Routes>
        </div>
      </div>
  )
}

export default App;