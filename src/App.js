import React, { Fragment,useState } from 'react';
import Header from "./componentes/header";
import Formulario from './componentes/formulario';

function App() {
  //usar useState
 const [cantidad, guardarCantidad] = useState(0);
 const [plazo, guardarPlazo] = useState('');
 const [total, guardarTotal] = useState(0);
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
        guardarTotal={guardarTotal}
        />
      <p>El total a pagar es :{total}</p>
      </div>
    </Fragment>
  );
}

export default App;
