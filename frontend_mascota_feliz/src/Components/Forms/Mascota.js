import React, { useContext, useRef, useState } from 'react'
import { ContextAll } from '../Context/Contexto'

function Mascota() {

    const {user, planes, crearMascota}= useContext(ContextAll)

    const [values, setValues] = useState({
        nombre: '',
        foto: '',
        especie: '',
        estado: 'pendiente',
        usuarioId: user.id,
        planId: ''

    })
    

let form = useRef()

    const handleEvent=(e)=>{
        let {name, value}= e.target
        setValues({
            ...values, 
            [name]: value
        })
    }

    const handleForm=(event)=>{
        event.preventDefault()
        console.log(values)
        crearMascota(values)
        
        form.current.reset();

    }



  return (
    <>
        <h1 className="d-inline " >Solicitud de Afiliación</h1>
              <form className="row g-3 p-2 needs-validation" noValidate onSubmit={handleForm} ref={form}>
                            <div className="col-md-6">
                            <label htmlFor="txtNombre" className="form-label">Nombre</label>
                            <input name='nombre' onChange={(e)=>handleEvent(e)} 
                             type="text" className="form-control" id="txtNombre" required=""/>
                            <div className="invalid-feedback">
                                Campo obligatorio
                            </div>
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="txtApellido" className="form-label">url de la foto</label>
                            <input name='foto' onChange={(e)=>handleEvent(e)}  
                            type="text" className="form-control" id="txtApellido" required=""/>
                            <div className="invalid-feedback">
                                Campo obligatorio
                            </div>
                            </div>
                            <div className="col-md-6">
                                  <label  htmlFor="" className="form-label">Plan</label>
                                  <select name='planId' onChange={(e)=>handleEvent(e)}
                                   className="form-select form-select" id="" required>
                                {planes.map((x, index)=>(
                                    <option key={index} value={x.id}>{x.nombre}</option>
                                ))}
                                  </select>
                                <div className="invalid-feedback">
                                    Campo obligatorio
                                </div>
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="txtCorreo" className="form-label">Especie</label>
                            <input name='especie' onChange={(e)=>handleEvent(e)} 
                            type="text" className="form-control" id="txtCorreo" required=""/>
                            <div className="invalid-feedback">
                                Campo obligatorio
                            </div>
                            </div>

                            {/* <div className="mb-3">
                            <label htmlFor="" className="form-label"></label>
                            <textarea name='comentario' onChange={(e)=>handleEvent(e)} 
                            className="form-control" id="" rows="3" cols="1" placeholder='Comentario'></textarea>
                            </div> */}
                            
                            <div className="col-12">
                            <button className="btn btn-primary" type="submit">Enviar</button>
                            </div>
              </form>
    </>
  )
}

export default Mascota