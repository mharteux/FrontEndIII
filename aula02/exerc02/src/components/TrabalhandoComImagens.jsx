import React from 'react';
import kirito from '../assets/kirito.jpeg'

function TrabalhandoComImagens() {
  return (
    <div>
      <img src="/kirito.jpeg" alt="KiritoPublic"/>

      <img src={kirito} alt="KiritoAsset"/>
    </div>
  );
}

export default TrabalhandoComImagens;
