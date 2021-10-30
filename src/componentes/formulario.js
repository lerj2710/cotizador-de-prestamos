import React,{Fragment ,useState} from 'react';
import { calcularCantidad } from '../helpers';


const Formulario = ({ cantidad, guardarCantidad, plazo, guardarPlazo}) => {

    //definir el error
const [error, guardarError] = useState(false);
    const calcularPrestamo = e =>{
        e.preventDefault();
        //mostrar el error
        if(cantidad=== 0 || plazo === ''){
            guardarError(true);
            return;
        }
        //eliminar el error previo
        guardarError(false);
        //mostrar cotizacion
     const total =   calcularCantidad(cantidad, plazo)
     console.log(total);
    };
    return ( 
        <Fragment>
        <form onSubmit={calcularPrestamo}>
         
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange={e => guardarCantidad(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={e => guardarPlazo(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>
        {(error) ? <p className="error">Todos los campos son obligatorio</p> : null}
       
        </Fragment>
     );
}
 
export default Formulario;