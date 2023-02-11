import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Login from './pages/Login';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Leaderboard' element={<Leaderboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
