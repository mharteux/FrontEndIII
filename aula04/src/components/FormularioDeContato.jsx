import React, { useState } from 'react';

function FormularioDeContato() {
  const [formData, setFormData] = useState({
    nome: '',
    contato: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonToSend = JSON.stringify(formData);
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
    
  };

  return (
    <div>
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contato">Contato:</label>
          <input type="text" id="contato" name="contato" value={formData.contato} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioDeContato;
