import './App.css';
import React from 'react';
import ClassClaus from './claus/ClassClaus'
import FunctionClaus from './claus/FunctionClaus'

function App() {
  let userName="Developer";
  return (
    <div className="App">
      <h1>Hello {userName} 👋</h1>
      <ClassClaus/>
      <FunctionClaus/>
    </div>
  );
}

export default App;
