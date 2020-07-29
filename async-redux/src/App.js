import React from 'react';
import GhibliCards from './components/GhibliCards'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ghibli Characters App <span role='img' aria-label='unicorn'>🦄</span></h1>
      <GhibliCards />
    </div>
  );
}

export default App;
