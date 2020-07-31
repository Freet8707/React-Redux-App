import React from 'react';
import GhibliCards from './components/GhibliCards'
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{backgroundColor: 'rgba(171, 230, 244, .5)', maxWidth: '450px', padding: '5px 15px'}}>Ghibli Characters App <span role='img' aria-label='unicorn'>🦄</span></h1>
      </div>
      <GhibliCards />
    </div>
  );
}

export default App;
