import React, { useState } from 'react';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  return (
  <>
    <p>{ usuario }</p>
    <input className="usuarioInput" placeholder="usuário do Github" onChange={e => setUsuario(e.target.value)} />
    <button type="button">Pesquisar</button>
  </>
  );
}

export default App;
