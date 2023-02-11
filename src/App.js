import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Login from './pages/Login';
<<<<<<< HEAD
import Leaderboard from './pages/Leaderboard';
=======
import Signup from './pages/Signup';
>>>>>>> 2c378d0e63e83b95e9baa8f72e61610f4eded3ea

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/Leaderboard' element={<Leaderboard/>} />
=======
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
>>>>>>> 2c378d0e63e83b95e9baa8f72e61610f4eded3ea
      </Routes>
    </Router>
  );
}

export default App;
