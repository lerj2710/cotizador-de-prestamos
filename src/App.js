import React, { Fragment,useState } from 'react';
import Header from "./componentes/header";
import Formulario from './componentes/formulario';

function App() {
  //usar useState
 const [cantidad, guardarCantidad] = useState(0);
 const [plazo, guardarPlazo] = useState('');
  return (
    <Fragment>
      <Header
         titulo ="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
