import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings'
import MessageContainer from '../Messages/MessagesContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';

const App = () => {

  return (
    <div className='page'>
      <Header />
      <Navbar />
      <div className='page__content'>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path='/dialogs/*'
            element={<MessageContainer
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
          <Route path='/users'
            element={<UsersContainer />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App;