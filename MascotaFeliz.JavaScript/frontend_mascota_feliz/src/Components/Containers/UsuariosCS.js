import React, { useContext, useRef } from 'react'
import { ContextAll } from '../Context/Contexto'
import FormUsuario from '../Forms/FormUsuario'
import Users from '../UsuariosCS/Users'

function UsuariosCS() {

    const {clientes, asesores, user} = useContext(ContextAll)

    let btn = useRef()

    const modal=()=>{
      btn.current.classList.toggle("modal")
      
  
      
       
    }



  return (
    <div className='USER d-flex justify-content-center fw-bold container-fluid flex-wrap'>

<div className='m-auto'>
  <button type="button" className="btn btn-primary" onClick={()=>modal()} >Agregar Usuario</button></div>
    

          <div className=" p-2 position-absolute text-center modal rounded-4  registro" ref={btn} >
              {user.rol==='administrador'?null :<h1 className="d-inline ">Registrarme</h1> }
              <button  className="btn btn-close  position-absolute p-3 bg-danger rounded-5"  onClick={()=>modal()} style={{ right:'5px'}}> </button>
              <FormUsuario roL={user.rol}></FormUsuario>
              
          </div>
        
              <div className='box p-2 m-1 box2 rounded-2' >
                  <div  className="bg-primary text-center p-2 h5 text-white rounded-2  ">Clientes</div>
                  <div className='contenido'>
                    {clientes.length>0? clientes.map((x, index)=>(
                      <Users key={index} nombre={x.nombre}
                      apellido={x.apellido} correo={x.correo} 
                      telefono={x.telefono} id={x.id}/>
                    )):<h5 className='text-white m-auto'>No Hay Clientes</h5>}
                  </div>
             
          </div>
        
              <div className='box p-2 m-1 box2 rounded-2' >
                  <div  className="bg-success text-center p-2 h5 text-white rounded-2 ">Asesores</div>
                  <div className='contenido'>
                  {asesores.length>0? asesores.map((x, index)=>(
                      <Users key={index} nombre={x.nombre}
                      apellido={x.apellido} correo={x.correo} 
                      telefono={x.telefono} id={x.id}/>
                    )):<h5 className='text-white m-auto'>No Hay Asesores</h5>}
                  </div>
              
          </div>


    </div>
  )
}

export default UsuariosCS