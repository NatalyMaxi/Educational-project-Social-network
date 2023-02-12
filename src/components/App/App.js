import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
    <BrowserRouter>
      <div className='page'>
        <Header />
        <Navbar />
        <div className='page__content'>
          <Routes>
            <Route path='/profile' element={<Profile posts={ props.posts} />} />
            <Route path='/dialogs/*' element={<Messages users={props.users} messages={props.messages} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;