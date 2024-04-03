import React from 'react';
import Campanha from './components/Campanha';

function App() {
  return (
    <div className="App">
      <h1>Campanhas</h1>
      <Campanha month="setembro" />
      <Campanha month="outubro" />
      <Campanha month="novembro" />
    </div>
  );
}

export default App;
