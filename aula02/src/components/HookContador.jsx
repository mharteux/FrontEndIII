import React, { useState } from 'react';

function HookContador() {
  const [contador, setContador] = useState(1);

  // Função para incrementar o contador
  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <div>
        <button onClick={incrementarContador}>Incrementar contador</button> 
        <p><h2>O contador está em: {contador}</h2></p>
    </div>
  );
}

export default HookContador;
