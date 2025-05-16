import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import Home from './pages/Home/Home.jsx';
// @ts-ignore
import Board from './pages/Board/Board.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards/:boardId" element={<Board />} />
      </Routes>
    </Router>
  );
};

export default App;