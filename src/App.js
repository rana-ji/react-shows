import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/tv-shows/:keyword" Component={ShowList} />
        <Route exact path="/tv-shows/details/:id" Component={ShowDetails} />
      </Routes>
    </Router>
  );
}

export default App;
