import React, { useState } from 'react';

function HookMegaSena() {
  const [numeroSorteado, setNumeroSorteado] = useState('');
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (numerosSorteados.length === 6) {
      alert("Já temos 6 números sorteados!");
      return;
    }

    const novoNumeroSorteado = Math.floor(Math.random() * 60) + 1;

    setNumeroSorteado(novoNumeroSorteado);
    setNumerosSorteados([...numerosSorteados, novoNumeroSorteado]);
  };

  return (
    <div>
        <button onClick={sortearNumero}>Sortear Número</button>
        <p><h2>Último Número Sorteado: {numeroSorteado}</h2></p>
        <p><h2>Sorteados: {numerosSorteados.join(', ')}</h2></p>
    </div>
  );
}

export default HookMegaSena;
