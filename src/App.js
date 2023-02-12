import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Login from './pages/Login';

import Leaderboard from './pages/Leaderboard';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Routes>

        <Route path='/Leaderboard' element={<Leaderboard/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;
