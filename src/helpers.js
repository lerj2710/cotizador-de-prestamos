export function calcularCantidad(cantidad, plazo) {
        //canditad
    //  0 - 1000 = 25%
    //  1001-1000 = 20%
    //  5001 -10000 = 15%
    //  + 10000 = 10%
    let totalCantidad;
    if (cantidad <= 1000) {
        totalCantidad = cantidad *.25;
    }else if(cantidad > 1000 && cantidad <= 5000) {

        totalCantidad = cantidad *.20;

    }else if(cantidad > 5000 && cantidad <= 10000) {

        totalCantidad = cantidad *.15;

    }else{
      totalCantidad = cantidad *.10;
    }
    console.log(totalCantidad);
    let totalPlazo = 0;
    switch (plazo) {
        case 3:
            totalPlazo= cantidad * .05;
            break;
            case 6:
                totalPlazo= cantidad * .10;
        
            break;
        case 12:
            totalPlazo= cantidad * .15;
    
            break;
        case 25:
            totalPlazo= cantidad * .20;

            break;
    
        default:
            break;
    }
    console.log(totalPlazo);
    return totalPlazo+ totalCantidad + cantidad;
}