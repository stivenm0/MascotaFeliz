import React from 'react'
import Eliminar from '../Botones/Eliminar'

function AProductos({tipo, nombre, descripcion, precio, id}) {




  return (
<details className='w-100 bg-light p-1 border border-1 border-secondary d-flex justify-content-start align-items-center text-start' >
  <summary className='' >{nombre} - - - - - - - $ {precio}</summary>
  <p>
  <span className='text-bg-warning p-1 rounded-3' >{tipo}: </span>{descripcion}
  </p>
  <p></p>

  <Eliminar id={id} caso={'producto'} ></Eliminar>
</details>
  )
}

export default AProductos