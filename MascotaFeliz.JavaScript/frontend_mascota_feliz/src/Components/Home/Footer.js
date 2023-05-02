import React from 'react'

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
  
          <section className=" pt-1">
            <div className="container text-center text-md-start mt-5">
        
              <div className="row mt-3">
                
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className=" bi-gem me-3"></i>Mascota Feliz
                  </h6>
                  <p>
                    Estamos comprometidos con el bienestar de nuestros pacientes y sus familias
                  </p>
                </div>
              
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">
                    Productos
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Alimentos</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Higiene</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Juguetes</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Medicina</a>
                  </p>
                </div>
              
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">
                    Servicios
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Revision medica</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Peluqueria</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Baño</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Spa</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">Contactos</h6>
                  <p> Bogota, Florida 10012, COL</p>
                  <p>MascotaFeliz@MF.com</p>
                  <p> + 01 234 567 88</p>
                  <p> + 01 234 567 89</p>
                </div>
              
              </div>
              
            </div>
  </section>
  

  
  <div className="text-center p-2" style={{background:'rgba(0, 0, 0, 0.05)'}}>
    © 2022 Copyright
    <a className="text-reset fw-bold" href="ryt">Mascota Feliz</a>
  </div>
</footer>
  )
}

export default Footer