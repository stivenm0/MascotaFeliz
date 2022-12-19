import React, { useContext, useEffect } from 'react'
import { ContextAll } from '../Context/Contexto'
import Productos from '../Tienda/Productos'

function Tienda() {

  const {productos, PRODUCTOSS} = useContext(ContextAll)


  useEffect(() => {
    PRODUCTOSS()
  }, [])
  
  
  return (
  <div className='USER  d-flex justify-content-center flex-wrap'>
    {productos.length>0? productos.map((x, index)=>(
    <Productos key={index} nombre={x.nombre} 
    descripcion={x.descripcion} precio={x.precio} />)):<h1>No Hay Productos Disponibles</h1> }
  
  </div>
    
    
  
  )
}

export default Tienda