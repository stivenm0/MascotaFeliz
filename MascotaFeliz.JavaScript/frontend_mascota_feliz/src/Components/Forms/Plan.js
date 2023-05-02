import React, { useContext, useRef, useState } from 'react'
import { ContextAll } from '../Context/Contexto'

function Plan() {

  const { crearPlan} = useContext(ContextAll)

    const [values, setValues] = useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    })

    let form =useRef();


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
        values.precio= parseInt(values.precio)
        crearPlan(values)
        form.current.reset();


        
        


    }


  return (
    <>
         <h1>Plan Nuevo</h1>
         <form onSubmit={handleForm} className='needs-validation' ref={form}>
                        <div className="form-outline form-floating p-2 ">
                                <input name='nombre' onChange={(e)=>handleEvent(e)} 
                                type="text" id="Nombre" className="form-control" placeholder="Nombre" />
                                <label className="text-muted" htmlFor="Nombre" required>nombre</label>
                        </div>
                        <div className="form-outline form-floating p-2 ">
                                <input name='precio' onChange={(e)=>handleEvent(e)} 
                                type="number" id="Precio" className="form-control" placeholder="Precio" />
                                <label className="text-muted" htmlFor="Precio" required>precio</label>
                        </div>

                        <div className="mb-3 p-2">
                          <textarea name='descripcion' onChange={(e)=>handleEvent(e)} 
                          className="form-control form-control-sm"  id="" rows="3" placeholder='Descripción' required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>                 
        </form>         
           
    </>
  )
}

export default Plan