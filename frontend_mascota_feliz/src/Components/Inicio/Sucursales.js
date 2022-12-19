import React from 'react'
import Eliminar from '../Botones/Eliminar'

function Sucursales({departamento, ciudad, direccion, telefono, id}) {
  return (
<details className='w-100 bg-light p-1 border border-1 border-secondary d-flex justify-content-start text-start align-items-center' >
  <summary className='text-uppercase' >{departamento} - {ciudad}</summary><hr></hr>
  <p>
  <span className='text-bg-warning p-1 rounded-3' >dirección:</span>  {direccion}
  </p> 
  <p>
  <span className='text-bg-warning p-1 rounded-3' >Teléfono:</span> {telefono}</p>
  <Eliminar id={id} caso={'sucursal'} ></Eliminar>
</details>
  )
}

export default Sucursales