import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

document.title = "DDK Monitoring Web"
function App() {
  return (
    <Routes>
      <div className="App">
        <Route path="/" element={<Home />} />
      </div>
    </Routes>
  );
}

export default App;
 