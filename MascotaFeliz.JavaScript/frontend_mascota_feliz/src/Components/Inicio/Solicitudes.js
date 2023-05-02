import React from 'react'
import Atender from '../Forms/Atender'

function Solicitudes({nombre, estado, foto, especie, dueño, correo, telefono, id}) {



  const estadoM=()=>{
    switch(estado){
      case "pendiente": 
      return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004dff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        )
      case "aceptado":
        return(
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00cd14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        )
      case "rechazado":
        return(
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d0021b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
        )

      default: break;
    }
    
  }


  return (
    <>
  <details className='w-100 overflow-hidden  bg-light p-1 border border-1 border-secondary d-flex justify-content-start text-start align-items-center' >
  <summary className='mb-2 position-relative' >
    
    <span className=' m-1 '>{nombre}({especie})</span> 
    <span className='mm position-absolute'> {estadoM()}</span>
    
  </summary>
  <div className='row ps-2 w-100'>
  <div className='col '>
  <span className=''> <img className='rounded-circle ' width="45" height='40' src={foto} alt='' ></img> </span>
  <p>
  <span className='text-bg-warning p-1 rounded-3' >Estado:</span> {estado}
  </p>
  <p>
  <span className='text-bg-warning p-1 rounded-3' >Dueño:</span>  {dueño}
  </p>
  <p>
  <span className='text-bg-warning p-1 rounded-3' >Correo: </span>{correo}
  </p> 
  <p>
  <span className='text-bg-warning p-1 rounded-3' >Telefono:</span> {telefono}</p>
  

  </div>

  <span className='col'><Atender id={id}></Atender></span>

</div>
  
</details>
</>
  )
}

export default Solicitudes