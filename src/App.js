import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Login from './pages/Login';
import Leaderboard from './pages/Leaderboard';
import Signup from './pages/Signup';
import Post from './components/Post'
import Feed from './pages/Feed';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/Leaderboard' element={<Leaderboard/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/post' element={<Post />} />
        <Route path='/feed' element={<Feed />} />
    
      </Routes> 
    </Router>
  );
}

export default App;
