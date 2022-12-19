import React, { useContext, useRef, useState } from 'react'
import { ContextAll } from '../Context/Contexto'

function Producto() {

    const {crearProducto} = useContext(ContextAll)

    let form= useRef()

    const [values, setValues] = useState({
        tipo: '',
        nombre: '',
        precio: 0,
        descripcion: '',
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
        values.precio= parseInt(values.precio)
        crearProducto(values)
        form.current.reset();

    }
 
 
 
    return (
    <>
       <h1>Producto Nuevo</h1>
            <form onSubmit={handleForm} ref={form}>
                        <div className="form-outline form-floating p-2 ">
                            <div className="mb-3">
                            <label className="form-label" >Tipo</label>
                            <select  onChange={(e)=>{ handleEvent(e) }} className="form-select form-select-lg" name="tipo" id="" required>
                                      
                                      <option value="producto"></option>
                                      <option value="producto">Producto</option>
                                      <option value="servicio">Servicio</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-outline form-floating p-2 ">
                                <input onChange={(e)=>{ handleEvent(e) }}
                                type="text" id="Nombre" name='nombre' className="form-control" placeholder="Nombre"  required/>
                                <label className="text-muted" htmlFor="Nombre" >Nombre</label>
                        </div>
                        <div className="form-outline form-floating p-2 ">
                                <input onChange={(e)=>{ handleEvent(e) }}
                                type="number" id="precio" name='precio' className="form-control" placeholder="Precio" required/>
                                <label className="text-muted" htmlFor="precio" >precio</label>
                        </div>

                        <div className="mb-3 p-2">
                          <textarea onChange={(e)=>{ handleEvent(e) }}
                          className="form-control form-control-sm" name="descripcion" id="" rows="3" placeholder='Descripción'></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>     
            </form>          
    </>
  )
}

export default Producto