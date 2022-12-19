import React from 'react'
import '../../Styles/Home.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
  <nav className="navbar navbar-expand-lg position-fixed  w-100 NAV" >
        <div className="container-fluid">
          <a className="navbar-brand h1" href="#!"><span style={{color: '#0400ff'}}>Mascota</span><span style={{color: 'rgb(0, 0, 0)'}}>Feliz</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
            <div className="navbar-nav fw-semibold">
              <Link className="nav-link me-4" to='/'>Inicio</Link>
              <Link className="nav-link me-4" to='Tienda' >Tienda</Link>
              <a className="nav-link me-4" href="#sobre">Sobre Nosotros</a>
              <a className="nav-link  me-4" href="#home">Contáctanos</a>
            </div>
          </div>
        </div>
  </nav>
  )
}

export default Nav