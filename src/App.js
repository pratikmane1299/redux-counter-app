import React from 'react';

import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <h1>Redux Counter App</h1>
      </div>
      <Counter />
    </div>
  );
}

export default App;
