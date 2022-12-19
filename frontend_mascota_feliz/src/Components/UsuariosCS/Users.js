import React from 'react'

function Users({nombre, apellido, correo, telefono}) {
  return (
<details className='w-100 bg-light p-1 border border-1 border-secondary d-flex justify-content-start align-items-center text-start' >
  <summary className='' >{nombre} {apellido}{}</summary>
  <p>
    Correo: {correo}
  </p>
  <p>
    telefono: {telefono}
  </p>
</details>
  )
}

export default Users