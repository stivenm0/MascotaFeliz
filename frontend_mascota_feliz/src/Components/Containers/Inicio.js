import React, { useContext, useRef, useEffect } from 'react'
import { Link} from 'react-router-dom'

import { ContextAll } from '../Context/Contexto'
import Mascota from '../Forms/Mascota'
import Plan from '../Forms/Plan'
import Producto from '../Forms/Producto'
import Sucursal from '../Forms/Sucursal'
import Afiliaciones from '../Inicio/Afiliaciones'
import AProductos from '../Inicio/AProductos'
import Pedidos from '../Inicio/Pedidos'
import Planes from '../Inicio/Planes'
import Solicitudes from '../Inicio/Solicitudes'
import Sucursales from '../Inicio/Sucursales'


function Inicio() {

    let {user, url, pedidos, productos, mascotas, planes, sucursales,
      MASCOTAS, PLANES, SUCURSALES, PRODUCTOSS, USUARIOS}= useContext(ContextAll)

    useEffect(() => {
      document.title= user.nombre;
      MASCOTAS();
      PRODUCTOSS()
      PLANES();
      SUCURSALES();
      USUARIOS()
    }, [])
    


    const modal= (number)=>{
      switch(number){
        case 1: afiliar.current.classList.toggle("modal");break;

        case 2: plan.current.classList.toggle("modal"); break;

        case 3: producto.current.classList.toggle("modal"); break;

        case 4: sucursal.current.classList.toggle("modal"); break;
        
        default: break;
      }
    }

    let afiliar = useRef();
    let plan = useRef();
    let producto = useRef();
    let sucursal = useRef();

    const selector=()=>{
      switch(user.rol){
        // ++++++++++++++++++++++++  CLIENTE  ++++++++++++++++++++++++++++++++
        case 'cliente':
           return(
           <div className='container-fluid bg-bd fw-bold text-center w-100 d-flex flex-wrap justify-content-center USER' >

                  <div className='box p-2 m-1' >
                    <Link to={url+'/Tienda'} className="btn btn-secondary w-100 add-btn" >Comprar</Link>
                    
                    <div className='contenido' >
                        {pedidos.length>0? pedidos.map((x, index)=>(
                          <Pedidos key={index} nombre={x.nombre} 
                          precio={x.precio} id={x.id}/>
                        )): <p className='text-white h3'>Pedidos</p>
                      }
                    </div>
                  </div>    
                  

                <div className=' box p-2 m-1  ' >
                      <button type="button" className="btn btn-primary add-btn " onClick={()=>modal(1)}>Afiliar Mascota</button>
                      <div className='contenido'>
                      {mascotas.length>0? mascotas.map((x, index)=>(
                          <Afiliaciones key={index} nombre={x.nombre} 
                          estado={x.estado} especie={x.especie} plan={x.planId} 
                          comentario={x.comentario} id={x.id} foto={x.foto}/>
                        )): <p className='text-white h3'>Sin Mascotas Afiliadas</p>
                      }
                      </div>
                </div>

                <div className=" p-2 position-absolute fw-normal text-center rounded-4 modal PInicio" ref={afiliar}>
                  <button  className="btn btn-close  position-absolute p-2 bg-danger rounded-5" onClick={()=>modal(1)} style={{ right:'5px'}}> </button>
                  <Mascota></Mascota>
              </div>

          </div>) 
          
          // ++++++++++++++++++++++++  ASESOR  ++++++++++++++++++++++++++++++++
          case 'asesor':
            return(
            <div className='container-fluid fw-bold text-center d-flex w-100 justify-content-center flex-wrap USER' >
              <div className=' container-md p-2 m-1 box2 rounded-2' >
                  <div  className="bg-primary text-center p-2 h5 text-white rounded-2 ">Solicitudes</div>
                  <div className='contenido'>
                    {mascotas.length>0? mascotas.map((x, index)=>(
                      <Solicitudes key={index} nombre={x.nombre}
                      estado={x.estado} foto={x.foto} especie={x.especie} 
                      posicion={x.index} correo={x.usuarioId.correo}
                      dueño={x.usuarioId.nombre +" "+ x.usuarioId.apellido}
                      telefono={x.usuarioId.telefono} id={x.id}/>
                    )):<h5>no hay Solicitudes</h5>}
                  </div>
              </div>
          </div>)

        // ++++++++++++++++++++++++  ADMINISTRADOR  ++++++++++++++++++++++++++++++++
          case 'administrador':
            return(
            <div className='container-fluid fw-bold text-center d-flex w-100 justify-content-center flex-wrap USER' >
              <div className=' box p-2 m-1  ' >
                  <button type="button" className="btn btn-primary add-btn " onClick={()=>modal(2)}>Agregar Plan</button>
                  <div className='contenido'>
                  {planes.length>0? planes.map((x, index)=>(
                          <Planes key={index} nombre={x.nombre} 
                          precio={x.precio} descripcion={x.descripcion}  id={x.id} />
                        )): <p className='text-white h3'>Sin Planes</p>
                      }
                  </div>
              </div>

              <div ref={plan} className=' modal position-absolute rounded-2 p-4 text-center PInicio'>
                <button  className="btn btn-close  position-absolute p-2 bg-danger rounded-5 " onClick={()=>modal(2)} style={{ right:'5px', top: '5px'}}> </button>
                 <Plan></Plan>
              </div>

                {/* -------------------------------------------------------------------------------------- */}
              <div className=' box p-2 m-1  ' >
                  <button type="button" className="btn btn-primary add-btn " onClick={()=>modal(3)}>Agregar producto</button>
                  <div className='contenido'>
                    {productos.length>0? productos.map((x, index)=>(
                      <AProductos key={index}
                      tipo={x.tipo} 
                      nombre={x.nombre} 
                      descripcion={x.descripcion} 
                      precio={x.precio} id={x.id}
                      ></AProductos>
                    )): <p className='text-white h3'>Sin Productos</p>
                  }
                  </div>
              </div>

              <div ref={producto} className=' modal position-absolute rounded-2 p-4 text-center PInicio'>
                <button  className="btn btn-close  position-absolute p-2 bg-danger rounded-5 " onClick={()=>modal(3)} style={{ right:'5px', top: '5px'}}> </button>
                  <Producto></Producto>
              </div>



              <div className=' box p-2 m-1  ' >
                  <button type="button" className="btn btn-primary add-btn " onClick={()=>modal(4)}>Agregar Sucursal</button>
                  <div className='contenido'>
                  {sucursales.length>0? sucursales.map((x, index)=>(
                          <Sucursales key={index} departamento={x.departamento} 
                          ciudad={x.ciudad} direccion={x.direccion} telefono={x.telefono} 
                           id={x.id} />
                        )): <p className='text-white h3'>Sin Sucursales</p>
                      }
                  </div>
              </div>

              <div ref={sucursal} className=' modal position-absolute rounded-2 p-4 text-center PInicio'>
                <button  className="btn btn-close  position-absolute p-2 bg-danger rounded-5 " onClick={()=>modal(4)} style={{ right:'5px', top: '5px'}}> </button>
                  <Sucursal></Sucursal>
                </div>

          </div>
                

          )
          default : return null    
      }
    }

  return (
    <>
    {selector()}
    </>
  )
}

export default Inicio