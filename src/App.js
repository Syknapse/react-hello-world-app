import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
  <div className="App">
  <HelloWorld name="World"/>
  <HelloWorld name="React"/>
  </div>
  );
};

export default App;