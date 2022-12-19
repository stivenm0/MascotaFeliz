import React from 'react'
import Eliminar from '../Botones/Eliminar'


function Planes({nombre, precio, descripcion, id}) {


  
  return (

        
<details className=' w-100 bg-light p-1 border border-1 border-secondary d-flex justify-content-start text-start align-items-center' >
  <summary className='position-relative' >  {nombre} - - - - - - $ {precio}  </summary>
  <p>
    
    {descripcion}
  </p><Eliminar id={id} caso={"plan"}/>
        
        
</details>


  )
}

export default Planes