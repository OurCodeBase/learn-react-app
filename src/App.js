import './App.css';
import React from 'react';
import ClassClaus from './claus/ClassClaus'

function App() {
  let userName="Developer";
  return (
    <div className="App">
      <h1>Hello {userName} 👋</h1>
      <ClassClaus/>
    </div>
  );
}

export default App;
