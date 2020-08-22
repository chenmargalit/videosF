import React from 'react';
import Video from './components/video';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Video />
    </Router>
  );
}

export default App;
