// Componente é uma função que retorna um HTML
// Toda vez que um estado é alterado o componente é remontado
import React from 'react';
import './global.css';

// sempre que uma pasta é importada o arquivo index é buscado
import Routes from './routes';

function App() {

  return (
    <Routes/>
  );
}

export default App;
