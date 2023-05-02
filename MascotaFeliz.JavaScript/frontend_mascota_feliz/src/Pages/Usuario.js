import {useContext, React} from 'react'
import perfil from '../images/perfil.jpg'
import { Outlet, Link } from 'react-router-dom';

import { ContextAll } from '../Components/Context/Contexto'

function Usuario() {
    const {user, cerrarSesion} = useContext(ContextAll);



  

  function nav(){


    switch(user.rol){

      case 'administrador': 
          return(
          <>
          <Link to={'/usuario/Usuarios'} className="nav-link me-4" >Usuarios</Link>
          </>
          )

      default: return null
      
    }
}

  return (
    <>
    <nav className="navbar navbar-expand-lg position-fixed  w-100 NAV" >
        <div className="container-fluid">
          <img src={perfil} width="45" alt="perfil sin foto" className=" border border-info rounded-circle"/>
          <span className=' fw-bold h6 text-capitalize ms-sm-2 mt-sm-2'>{user.nombre} {user.apellido}</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
            <div className="navbar-nav fw-semibold">
              <Link to='/usuario' className="nav-link me-4" >Panel</Link>
              <Link to={'/usuario/Tienda'} className="nav-link me-4" >Tienda</Link>   
              {nav()}

              {/* <a className="nav-link me-4"  href="#home">Ajustes</a> */}
              <Link to='/' className="nav-link me-4" onClick={()=>{ cerrarSesion()}} >Salir</Link>
            </div>
          </div>
        </div>
    </nav>
    
    
  <Outlet />
  </>
  )
}

export default Usuario