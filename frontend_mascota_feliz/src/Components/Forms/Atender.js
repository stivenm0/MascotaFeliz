import React, { useContext, useRef } from 'react'
import { ContextAll } from '../Context/Contexto'

function Atender(id, comentario) {


    const {definirSolicitud} = useContext(ContextAll)

        let n1= useRef()
        let n2= useRef()
        let form= useRef()
        let comment= useRef()
    
        const handleSubmit=(event)=>{
            event.preventDefault()
            let data={
                id: id.id,
                comentario: comment.current.value
            }
            if(n1.current.checked){
                data.estado= n1.current.value
            }else if(n2.current.checked){
                data.estado= n2.current.value
            }

            definirSolicitud(data)
            
        }

  return (
    <details className='text-bgg p-2 rounded-2'>
        <summary>actualizar</summary>

    <form onSubmit={handleSubmit} ref={form}>
    <div className="form-check" >
      <input ref={n1} name='estado' className="form-check-input" type="radio" value="aceptado" id="estado"/>
      <label className="form-check-label" htmlFor="estado">
        Aceptar
      </label>
    </div>
    <div className="form-check">
      <input ref={n2}  name='estado' className="form-check-input" type="radio" value="rechazado" id="estado" />
      <label className="form-check-label" htmlFor="estado">
        Rechazar
      </label>
    </div>

  <div className="mb-3">
    <label htmlFor="Comentario" className="form-label">comentario</label>
    <textarea className="form-control" ref={comment}  id="Comentario" rows="3"></textarea>
  </div>

  <button type="submit" className="btn btn-primary">aceptar</button>

  </form>
  </details>
   
  )
}

export default Atender