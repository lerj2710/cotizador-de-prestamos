import React, { Fragment } from 'react';
import Header from "./componentes/header";
import Formulario from './componentes/formulario';

function App() {
  return (
    <Fragment>
      <Header
         titulo ="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
