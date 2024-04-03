import React from 'react';

function InlineStyleComponent() {
  const inlineStyle = {
    color: '#ff0000',
    backgroundColor: '#0000ff',
    width: '200px',
    textAlign: 'center'
  };

  return (
    <div style={inlineStyle}>
      <p>Exemplo de componente React com estilo inline.</p>
    </div>
  );
}

export default InlineStyleComponent;
