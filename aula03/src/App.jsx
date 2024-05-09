import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno';

const App = () => {
  const alunos = [
    { nome: 'Matheus', email: 'matheus@email.com', curso: 'Sistemas para Internet', media: 8.5 },
    { nome: 'Júlia', email: 'julia@email.com', curso: 'Medicina', media: 6.8 },
    { nome: 'Aria', email: 'aria@email.com', curso: 'Nutrição', media: 7.2 }
  ];

  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false}/>

      <h1>Lista de Alunos</h1>
      {alunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}
    </div>
  );
};

export default App