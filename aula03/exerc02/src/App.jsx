import React from 'react';
import Aluno from './components/Aluno';

const App = () => {
  const alunos = [
    { nome: 'Matheus', email: 'matheus@email.com', curso: 'Sistemas para Internet' },
    { nome: 'Júlia', email: 'julia@email.com', curso: 'Medicina' },
    { nome: 'Aria', email: 'aria@email.com', curso: 'Nutrição' }
  ];

  return (
    <div>
      <h1>Lista de Alunos</h1>
      {alunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}
    </div>
  );
};

export default App;
