import React, { useContext, useRef, useState } from 'react';
import { ContextAll } from '../Context/Contexto';
import {useForm} from 'react-hook-form';

function FormUsuario(rol) {

  const { crearUsuario, user} = useContext(ContextAll)

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: {
    rol: 'cliente'
  }});

  const {required} = {required:{ value: true, message: 'Campo Obligatorio' }}
    const [values, setValues] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        correo:'',
        telefono:'',
        rol:'cliente'
    })

    let form =useRef();

    const handleForm=(event)=>{
        crearUsuario(event, form)

    }




  return (
    <form className="row fw-bold g-3 p-2 needs-validation" ref={form} onSubmit={handleSubmit(handleForm)}>
                  
                  {user.rol==='administrador'?<div className="mb-3">
                    <label htmlFor="" className="form-label">rol</label>
                    <select className="form-select form-select-sm" name="rol" 
                      {...register('rol',{ 
                        required
                      } )}
                       >
                      <option value="">Seleccione rol</option>
                      <option value="asesor">asesor</option>
                      <option value="administrador">administrador</option>
                      <option value="cliente">cliente</option>
                    </select>
                  </div>:null}{errors.rol && <div className="text-white h6 bg-dark text-start px-1">{errors.rol.message}</div> }

                <div className="form-floating col-md-6">
                    <input type="text" className="form-control form-control-sm  text-capitalize"
                    id="txtNombre"  placeholder='nombre'  {...register('nombre',{ 
                      required
                    } )}
                    />{errors.nombre && <div className="text-white h6 bg-dark text-start px-1">{errors.nombre.message}</div> }
                    <label htmlFor="txtNombre" className=" text-muted">Nombre</label>
                </div>
                
                <div className="form-floating col-md-6">
                    <input  name='apellido' type="text" className="form-control text-capitalize" 
                    id="txtApellido"  placeholder='apellido'  {...register('apellido',{ 
                      required
                    } )}
                    />{errors.apellido && <div className="text-white h6 bg-dark text-start px-1">{errors.apellido.message}</div> }
                    <label htmlFor="txtApellido" className="text-muted">Apellido</label>
                </div>

                <div className="form-floating col-md-6">
                    <input  name='cedula' type="number" className="form-control" 
                    id="txtCedula"  placeholder='cedula' {...register('cedula', {
                      required
                    })}                      
                    />{errors.cedula && <div className="text-white h6 bg-dark text-start px-1">{errors.cedula.message}</div> }
                     <label htmlFor="txtCedula" className="text-muted">Cedula</label>
                </div>

                <div className="form-floating col-md-6">
                    <input  name='correo'type="text" className="form-control" 
                    id="txtCorreo" placeholder='correo' {...register('correo',{
                      required, pattern:{
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Campo Invalido'
                        }
                    })}
                    />{errors.correo && <div className="text-white h6 bg-dark text-start px-1">{errors.correo.message}</div> }
                    <label htmlFor="txtCorreo" className="text-muted">Correo Electronico</label>
                </div>

                <div className="form-floating col-md-6">
                    <input  name='telefono' type="number" className="form-control" 
                    id="txTelefono"  placeholder='teléfono' {...register('telefono', {
                      required, maxLength:{
                        value: 10, message: 'Número Invalido'
                      }
                    })}
                    />{errors.telefono && <div className="text-white h6 bg-dark text-start px-1">{errors.telefono.message}</div> }
                    <label htmlFor="txTelefono" className="text-muted">Teléfono</label>
                </div>

                <div className="form-floating col-md-6">
                    <input  name='contrasena' type="text" className="form-control" id="txtTelefono" 
                    placeholder='contraseña' {...register('contrasena', {
                      required, minLength:{ value: 4, message: 'muy corta' }
                    })}
                    />{errors.contrasena && <div className="text-white h6 bg-dark text-start px-1">{errors.contrasena.message}</div> }
                    <label htmlFor="txtTelefono" className="text-muted">Contraseña</label>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Registrar</button>
                </div>
              </form>
  )
}

export default FormUsuario