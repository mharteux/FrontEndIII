import React from "react";
import escolhaDeRenderizacao from "./components/RenderizandoComFuncoes";

const App = () => {
  return (
    <div>
      {escolhaDeRenderizacao("h1")}    
      {escolhaDeRenderizacao("h2")}
    </div>
  );
}

export default App;