import React, { useRef, useContext} from 'react';
import {ContextAll} from '../Context/Contexto';
import '../../Styles/Home.css';
import {MD5} from '../Encriptacion';
import FormUsuario from '../Forms/FormUsuario';
import {useForm} from 'react-hook-form';


function Header({ingreso}) {

  const {iniciarSesion} = useContext(ContextAll);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const registro= useRef();
  const inicio= useRef();
 

  const modal=()=>{
    inicio.current.classList.toggle("modal")

    registro.current.classList.toggle("modal")
  }

  async function Sesion(e){
    let contrasena = MD5(e.contrasena);
    e.contrasena = contrasena;
    let is= await iniciarSesion(e);
    ingreso(is)
  }

  const mostrar = (e)=>{
    let inpContraseña = inicio.current.querySelector('#Contraseña');
    inpContraseña.type = inpContraseña.type==='text'?'password': 'text';
    e.target.classList.toggle("actv")
  }

  const validar = (e)=>{
    let btnVista = inicio.current.querySelector('.vista');
    if(e.target.value.length < 2){
      btnVista.style.visibility = "hidden"
    }else{
      btnVista.style.visibility = "initial"
    }
  }

  

  return (
    <header className="container-fluid p-0  d-flex justify-content-center align-items-center header ">

        <form className="card inicio" ref={inicio} onSubmit={handleSubmit(Sesion)}>
          <div className="card-body text-center">
            <h4 className="card-title fw-semibold">INICIAR SESIÓN</h4>

            <div className="form-floating w-100 my-2" >
                <input  type="email" className="form-control form-control-sm h-50 " id="usuario" 
                placeholder="Correo"  {...register("usuario",{
                required: { value: true, message: 'Campo Obligatorio' },
                pattern:{
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Campo Invalido'
                  }
                })}
                />{errors.usuario && <div className="text-white h6 bg-dark text-start px-1">{errors.usuario.message}</div> }
                <label htmlFor="usuario" className="text-muted">Correo</label>
            </div>

            <div className="form-floating w-100 my-2 "  >
                <input type="password" className="form-control form-control-sm h-50 " autoComplete="on"
                id="Contraseña" placeholder="Contraseña" {...register("contrasena",{
                  required: { value: true },})} onChange={validar}
                /> <span className='vista' onClick={mostrar}>Mostrar</span>
                {errors.contrasena && <div className="text-white h6 bg-dark text-start px-1">{errors.contrasena.message}</div> }
                <label htmlFor="contraseña" className="text-muted">Contraseña</label>
            </div>

            <div className="text-start user">

              <button className="fw-semibold btn " type='button' onClick={()=>modal()} >Crear Cuenta</button>
            </div>
            <button type="submit" className="btn btn-dark rounded-4"  >Ingresar</button>
          </div>
        </form>


        {/* +++++++++++++++ Registrarme +++++++++++++++++++++++++ */}

        <div className=" p-2 position-absolute text-center rounded-4 modal registro" ref={registro}>
              <h1 className="d-inline ">Registrarme</h1>
              <button  className="btn btn-close  position-absolute p-3 bg-danger rounded-5" onClick={()=>modal()} style={{ right:'5px'}}> </button>
              <FormUsuario></FormUsuario>      
        </div>

    </header>
  )
}

export default Header