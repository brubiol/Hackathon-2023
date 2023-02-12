import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Login from './pages/Login';

import Leaderboard from './pages/Leaderboard';
import Signup from './pages/Signup';
import Post from './components/Post'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/post' element={<Post />} />
        

      </Routes>
    </Router>
  );
}

export default App;
