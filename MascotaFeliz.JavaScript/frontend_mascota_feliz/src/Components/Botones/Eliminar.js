import React, { useContext } from 'react'
import { ContextAll } from '../Context/Contexto';

function Eliminar({id, caso}) {

  const {pedidos, setPedidos,
         eliminarPlan, eliminarProducto,
         eliminarSucursal, eliminarMascota} = useContext(ContextAll)
  

  const delet=()=>{
    switch(caso){
      case 'pedido':  setPedidos(pedidos.filter(e=>e.id!==id)) 
      break;
      case 'plan':  eliminarPlan(id) 
      break;
      case 'producto':  eliminarProducto(id) 
      break;
      case 'sucursal':  eliminarSucursal(id) 
      break;
      case 'mascota':  eliminarMascota(id) 
      break;
        
      
      


      default: break;
    }
  }

  return (
    <button type="button" className="btn btn-danger m-auto" onClick={delet}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    </button>
  )
}

export default Eliminar