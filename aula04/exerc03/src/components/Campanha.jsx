import React from 'react';
import styles from './Campanha.module.css';

function Campanha({ month }) {
  let message, className;

  switch (month.toLowerCase()) {
    case 'setembro':
      message = 'Prevenção ao suicídio';
      className = styles.september;
      break;
    case 'outubro':
      message = 'Conscientização sobre o câncer de mama';
      className = styles.october;
      break;
    case 'novembro':
      message = 'Prevenção e combate ao câncer de próstata';
      className = styles.november;
      break;
    default:
      message = '';
      className = '';
  }

  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  );
}

export default Campanha;
