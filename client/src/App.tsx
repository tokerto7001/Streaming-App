import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <video controls>
        <source src='http://localhost:8000/video.mp4' type="video/mp4" />
      </video>
    </>
  );
}

export default App;
