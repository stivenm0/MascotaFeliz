import React, { useContext, useRef, useState } from 'react'
import { ContextAll } from '../Context/Contexto'


function Sucursal() {

 let form= useRef();

  const {crearSucursal} = useContext(ContextAll)

  const [values, setValues] = useState({
      departamento: '',
      ciudad: '',
      direccion: '',
      telefono: ''
  })

  const handleEvent=(e)=>{
    let {name, value}= e.target
    setValues({
        ...values, 
        [name]: value
    })
}

const handleForm=(event)=>{
    event.preventDefault()
    crearSucursal(values)
    form.current.reset();
    
}


    

  return (
    <>
            <h1>Sucursal Nueva</h1>
                  <form onSubmit={handleForm} ref={form}>
                        <div className="form-outline form-floating p-2 ">
                                <input name='departamento' onChange={(e)=>handleEvent(e)}
                                type="text" id="Departamento" className="form-control text-uppercase " placeholder="departamento" />
                                <label className="text-muted" htmlFor="Departamento" required>Departamento</label>
                        </div>
                        <div className="form-outline form-floating p-2 ">
                                <input name='ciudad' onChange={(e)=>handleEvent(e)}
                                type="text" id="ciudad" className="form-control text-uppercase" placeholder="Ciudad" />
                                <label className="text-muted" htmlFor="ciudad" required>ciudad</label>
                        </div>
                        
                        <div className="form-outline form-floating p-2 ">
                                <input name='direccion' onChange={(e)=>handleEvent(e)}
                                 type="text" id="Direccion" className="form-control" placeholder="Dirreción" />
                                <label className="text-muted" htmlFor="Direccion" required>Dirección</label>
                        </div>
                        <div className="form-outline form-floating p-2 ">
                                <input name='telefono' onChange={(e)=>handleEvent(e)}
                                type="number" id="Telefono" className="form-control" placeholder="Telefono" />
                                <label className="text-muted" htmlFor="Telefono" required>Telefono</label>
                        </div>

                        <button type="submit" className="btn btn-primary">Agregar</button>
                  </form>
    </>
  )
}

export default Sucursal