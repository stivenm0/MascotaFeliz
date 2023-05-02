import React, { useContext, useRef, useState } from 'react'
import { ContextAll } from '../Context/Contexto'
import producto from'../../images/producto.png'

function Productos({nombre, descripcion, precio, tipo}) {

  const {pedidos, setPedidos, user}=useContext(ContextAll);
  const boton = useRef();
  
  const [n, setN] = useState(1);

  const add=()=>{
      setPedidos([...pedidos, {id: pedidos.length, nombre: nombre, precio: precio},])

      setN(n+1)
      boton.current.innerText= n;
  }
  
  return (
    <>
        <div className="card m-2 productos" style={{width:"18rem"}}>
          <img src={tipo==='producto'? producto: producto } width='100' className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fw-bold">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">$ {precio}</p>
            {user.rol==='cliente'?
            <button type="button" className="btn btn-primary" ref={boton} onClick={add}>Comprar</button>
            : null}
            
            
          </div>
        </div>
    </>
  )
}

export default Productos