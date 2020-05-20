import React, { useState } from 'react';


function App(props) {
  return (
  <>
    <h1>{ props.title } { props.user }</h1>
    <input name="usuario" id="usuario" className="usuarioInput" placeholder="usuário do Github" />
    <button type="button">Pesquisar</button>
  </>
  );
}

export default App;
