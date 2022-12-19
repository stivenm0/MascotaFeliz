import React,{useRef, useContext} from 'react'
import Servicios from './Servicios'
import {useForm} from 'react-hook-form'
import '../../Styles/Home.css'
import { ContextAll } from '../Context/Contexto'

function Main() {

  const{register, handleSubmit, formState: { errors }}= useForm()

  const {crearProspecto}= useContext(ContextAll);
  
  const {required} = {required:{ value: true, message: 'Campo Obligatorio' }}

    
  let izquierda =  useRef();
  let derecha = useRef();
  let article = useRef();
  let form = useRef();


function RIGHT(){ article.current.scroll(article.current.scrollLeft + 260, 0) }
function LEFT(){ article.current.scroll(article.current.scrollLeft - 260, 0) }


  const handleform= (e)=>{
    crearProspecto(e, form.current)
    
  }

  return (
    <main className="container-fluid p-0" id="sobre">

        <section className="text-white text-center p-3 bg-dark " id="SN">
        <div className=" h-50">
          <h2>MASCOTA FElIZ</h2>
          <p className="" >La Clínica Veterinaria MASCOTA FELIZ es una empresa dedicada al cuidado de las mascotas, que lleva en el mercado desde el año 2006, trabajando en pro del bienestar de cada mascota. Desde entonces, sus primordiales objetivos estuvieron encaminados a mejorar en todos sus servicios, y muchos de estos objetivos se han logrado, como la innovación de los equipos de diagnóstico, cirugía, y la adecuación de la infraestructura, dando como resultado el poder ofrecer a todos nuestros clientes un servicio integral atendidos por profesionales de altísima calidad, todo ésto con el fin de tratar nuestros pacientes como seres que merecen la mejor atención y especial cuidado.</p>
        </div>
          <h3 className="mt-md-5 position-relative">Nuestros Servicios y Productos
          <button ref={izquierda} id='izquierda' onClick={()=>LEFT()} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button id="derecha" ref={derecha} onClick={()=>RIGHT()} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
          </h3>
          <div className="d-flex justify-content-start overflow-hidden HH" ref={article} >
            

              <Servicios 
                titulo='Atención Medica' 
                cuerpo='consulta general y especializada en ortopedia y
                neurología, ecografía, radiografía, endoscopia y laboratorio.'
              />

              <Servicios 
                titulo='Atención Hospitalaria' 
                cuerpo='cirugía de tejidos blandos, cirugía neurológica, 
                ortopédica y múltiples consultorios
                adecuados para la atención de animales de compañía.'
              />

              <Servicios 
                titulo='Atención Estética y Disciplinar' 
                cuerpo=' peluquería canina y felina, petshop, 
                Spa, baño, etologia, guarderia y corte de uñas.'
              />

              <Servicios
                titulo='Alimentos' 
                cuerpo=' Productos alimenticios de alta calidad 
                nutricional para tus mascotas. '
              />

              <Servicios
                titulo='Juguetes' 
                cuerpo=' Productos para el cuidado de la salud
                de tu mascota y su entretenimiento. '
              />

              <Servicios
                titulo='Medicamentos' 
                cuerpo='Productos para la higiene de tu mascota y medicamentos. '
              />
          </div>
                
                
        </section>
        
       
      <section className='Ccontactanos p-1 py-5 ' id='home'>
            <div className="container-md contactanos rounded-2">
                <form className=" p-md-4 pb-md-2 w-100  text-center "  ref={form}
                onSubmit={handleSubmit(handleform)}>
                    <h1>Contáctanos</h1>
                    <div className="row mb-4 g-2" >
                      <div className="col-sm ">
                        <div className=" form-floating ">
                          <input type="text" id="form3Example1" className="form-control " 
                          placeholder="Nombre" {...register('nombre',{
                            required
                          })}
                          />{errors.nombre && <div className="text-white h6 bg-dark text-start px-1">{errors.nombre.message}</div> }
                          <label className="text-muted" htmlFor="form3Example1" >Nombre</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline form-floating">
                          <input type="text" id="form3Example2" className="form-control "
                           placeholder="Apelllido" {...register('apellido',{
                            required
                          })}
                           />{errors.apellido && <div className="text-white h6 bg-dark text-start px-1">{errors.apellido.message}</div> }
                          <label className="text-muted" htmlFor="form3Example2" >Apellido</label>
                        </div>
                      </div>
                    </div>
                  
                    <div className="row mb-4 g-2">
                      <div className="col-sm ">
                        <div className="form-outline form-floating ">
                          <input type="email" id="correo" className="form-control" 
                          placeholder="Correo" {...register('correo',{
                            required
                          })}
                          />{errors.correo && <div className="text-white h6 bg-dark text-start px-1">{errors.correo.message}</div> }
                          <label className="text-muted" htmlFor="correo" required>Correo</label>
                        </div>
                      </div>
                      <div className="col-sm ">
                        <div className="form-outline form-floating ">
                          <input type="number" id="ccelular" className="form-control"
                           placeholder="Celular" {...register('celular',{
                            required
                          })}
                          />{errors.celular && <div className="text-white h6 bg-dark text-start px-1">{errors.celular.message}</div> }
                          <label className="text-muted" htmlFor="ccelular" required>Celular</label>
                        </div>
                      </div>
                  
                      </div>
                        <div className="form-outline form-floating mb-2">
                          <textarea className="form-control h-auto" id="form4Example3" rows="4" 
                          placeholder="Comentario" {...register('comentario',{
                            required
                          })}
                          />{errors.comentario && <div className="text-white h6 bg-dark text-start px-1">{errors.comentario.message}</div> }
                          <label className="text-muted" htmlFor="form4Example3" required>Comentario</label>
                        </div>

                      <div className="text-center">

                        <button type="submit" className="btn btn-lg btn-dark btn-block mb-4">Enviar</button>
                      </div>
                  </form>
            </div>

      </section> 
      </main>
  )
}

export default Main