import React from 'react';
import './App.css';
import CustomComponent from './components/CustomComponent';
import Campanha from './components/Campanha';
import FormularioDeContato from './components/FormularioDeContato';

function App() {
  const App = {
    color: '#fff000',
    backgroundColor: '#ffffff',
    width: 'auto',
    textAlign: 'center'
  };
  return (
    <div style={App}>
      <CustomComponent />
      <p>Exemplo de componente React com estilo inline.</p>
      <h1>Campanhas</h1>
      <Campanha month="setembro" />
      <Campanha month="outubro" />
      <Campanha month="novembro" />
      <FormularioDeContato />
    </div>
  );
}

export default App;
