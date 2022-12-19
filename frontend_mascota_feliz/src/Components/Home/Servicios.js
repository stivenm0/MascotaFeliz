import React from 'react'

function Servicios({titulo, cuerpo}) {
  return (
    <div className="card m-1 m-sm-3  CARD" >
                  <div className="card-body text-light" >
                    <h5 className="card-title text-bgg rounded-2">{titulo}</h5>
                    <p className="">
                      {cuerpo}
                    </p>
                  </div>
    </div>
  )
}

export default Servicios