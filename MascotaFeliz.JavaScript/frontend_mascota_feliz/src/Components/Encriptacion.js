const cryptoJS= require('crypto-js');


export function MD5(dato){
    let datoFinal = cryptoJS.MD5(dato).toString()

    return datoFinal
}
