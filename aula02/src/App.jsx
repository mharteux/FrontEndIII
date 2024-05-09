import React from "react";
import escolhaDeRenderizacao from "./components/RenderizandoComFuncoes";
import TrabalhandoComImagens from "./components/TrabalhandoComImagens";
import HookContador from './components/HookContador';

function App() {
  return (
    <div>
      {escolhaDeRenderizacao("h1")}    
      {escolhaDeRenderizacao("h2")}

      <TrabalhandoComImagens/>

      <h2>Contador com useState</h2>
      <HookContador/>
    </div>
  );
}

export default App;