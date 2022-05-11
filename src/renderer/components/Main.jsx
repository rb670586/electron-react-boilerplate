import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
// import PlayerTable from '../pages/PlayerTable';
// import Team from '../pages/Team';

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
