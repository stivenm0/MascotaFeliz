import React from 'react'
import Eliminar from '../Botones/Eliminar'

function Pedidos({nombre, precio, id}) {

  

  return (
    <div className='w-100 bg-light p-1 border border-1 border-secondary d-flex justify-content-between align-items-center flex-wrap'>

        <h5>{nombre}</h5>
        <h6 className='fw-bold' >${precio}</h6>
        <div>
          <Eliminar  id={id} caso={'pedido'} />
        </div>
        
    </div>
  )
}

export default Pedidos