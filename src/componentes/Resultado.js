import React from 'react';

const Resultado = ({ total, plazo, cantidad}) =>  ( 
        <div className="u-full-with resultado">
            <h2>Resumen</h2>
            <p>la cantidad solicitada es: $ {cantidad}</p>
            <p>Plazo a pagar en: $ {plazo} Meses</p>
            <p>Pago mensual es: $ {(total/plazo).toFixed(2)}</p>
            <p>total a pagar es de : $ {total} </p>
        </div>
);

 
export default Resultado;