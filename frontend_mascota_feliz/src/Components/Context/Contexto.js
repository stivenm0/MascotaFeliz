import {React, createContext} from 'react'
import { useLocalStorage} from '../../DataLocal';
import swal from 'sweetalert';

export const ContextAll = createContext();

function ContextoProvider(props) {


    const [user, setUser]= useLocalStorage('user', {})

    //+++++++++ URLS +++++++++++++++++++
    const Backend= 'http://localhost:3000';


     // +++++++++++ STATES +++++++++++++++
      const [clientes, setClientes]= useLocalStorage('clientes', [])

      const [asesores, setAsesores]= useLocalStorage('asesores', [])

      const [planes, setPlanes] = useLocalStorage('planes', [])

      const [productos, setProductos] = useLocalStorage('producto', [])

      const [sucursales, setSucursales] = useLocalStorage('sucursales', [])

      const [pedidos, setPedidos] = useLocalStorage('pedidos', [])

      const [mascotas, setMascotas]= useLocalStorage('mascotas', [])


    // ++++++++++++ CRUD PLANES ++++++++++++++++++

      async function PLANES(){
        let one= await fetch(`${Backend}/plans` )
        let two = await one.json();
        setPlanes([...two]);
      }

      async function crearPlan(datos){
        let one= await fetch(`${Backend}/plans`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{ 'Content-Type': 'application/json' }
        })

        let two = await one.json();
        setPlanes([...planes, two]);
      }

      async function eliminarPlan(id){
        let one= await fetch(`${Backend}/plans/`+id, {
          method: 'DELETE',
        })

        if(one.status===204){
          setPlanes([...planes.filter(x=> x.id !== id)]);
        }
      }

    // ++++++++++++ CRUD PRODUCTOS ++++++++++++++++++
      async function PRODUCTOSS(){
        let one= await fetch(`${Backend}/productos-servicios`)
        let two = await one.json();

        setProductos([...two]);
      }

      async function crearProducto(datos){
        let one= await fetch(`${Backend}/productos-servicios`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{ 'Content-Type': 'application/json' }
        })

        let two = await one.json();
        setProductos([...productos, two]);
      }

      async function eliminarProducto(id){

        let one= await fetch(`${Backend}/productos-servicios/`+id, {
          method: 'DELETE',
        })

        if(one.status===204){
          setProductos([...productos.filter(x=> x.id !== id)]);
        }
      }

    // ++++++++++++ CRUD SUCURSALES ++++++++++++++++++
      async function SUCURSALES(){
        let one= await fetch(`${Backend}/sucursals`, {
          method: 'GET',
          headers:{ 'Content-Type': 'application/json' }
        })

        let two = await one.json();
        setSucursales([...two]);
      }

      async function crearSucursal(datos){

        let one= await fetch(`${Backend}/sucursals`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{ 'Content-Type': 'application/json' }
        })

        let two = await one.json();
        setSucursales([...sucursales, two]);
      }

      async function eliminarSucursal(id){

        let one= await fetch(`${Backend}/sucursals/`+id, {
          method: 'DELETE',
        })

        if(one.status===204){
          setSucursales([...sucursales.filter(x=> x.id !== id)]);
        }
      }

    // ++++++++++++ CRUD MASCOTAS ++++++++++++++++++
      async function MASCOTAS(){
          let one= await fetch(`${Backend}/mascotas`)

          let two = await one.json();

          switch(user.rol){
            case "cliente":
              let all = [...two.filter(x=>(x.usuarioId=== user.id))]
              buscarplan(all)
            break;
            case "asesor":
              buscarplan(two);
            break;

            default: break;
          }

      }

      async function crearMascota(datos){
        let one= await fetch(`${Backend}/mascotas`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{ 'Content-Type': 'application/json' }
        })
        MASCOTAS();
      }

      async function eliminarMascota(id){

        let one= await fetch(`${Backend}/mascotas/`+id, {
          method: 'DELETE',
        })

        if(one.status===204){
          setMascotas([...mascotas.filter(x=> x.id !== id)]);
        }
      }

    // ++++++++++++ USUARIOS ++++++++++++++++++
      async function USUARIOS(){
        let one= await fetch(`${Backend}/usuarios`, {
          method: 'GET',
          headers:{ 'Content-Type': 'application/json' }
        })
        let two = await one.json();

        setClientes([...two.filter(x=> x.rol==='cliente')])
        setAsesores([...two.filter(x=> x.rol==='asesor')])

      }

      async function crearUsuario(datos, form){
        let one= await fetch(`${Backend}/usuarios`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{ 'Content-Type': 'application/json' }
        })
        if(one.status>=200 && one.status<= 399){
          form.current.reset()
          swal('listo','', 'success')
        }
        USUARIOS()
      }

      async function crearProspecto(datos, form){
        let one= await fetch(`${Backend}/prospectos`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{ 'Content-Type': 'application/json' }
        })
        if(one.status>=200 && one.status<= 399){
          form.reset()
          swal('listo','', 'success')
        }
      }

     async function buscarplan(all){

          let trial = all;
          for(let i = 0; i<trial.length; i++){
          let ii = trial[i].id
          let one =await  fetch(`${Backend}/mascotas/${ii}/plan`)
          let two = await one.json()

          trial[i].planId= two.nombre

        }

        if(user.rol==='asesor'){
          for(let i = 0; i<trial.length; i++){
          let ii = trial[i].id
          let one =await  fetch(`${Backend}/mascotas/${ii}/usuario`)
          let two = await one.json()

          trial[i].usuarioId= two
        }

        }
          setMascotas(trial)
      }

      async function definirSolicitud(datos){
        let one= await fetch(`${Backend}/mascotas/${datos.id}`, {
          body: JSON.stringify(datos),
          method: 'PATCH',
          headers:{ 'Content-Type': 'application/json' }
        })

        if(one.status===204){
          MASCOTAS();
        }
      }



    // --------- funciones de inicio y cierre de sesion ---------------
    async function iniciarSesion(usuario){

            let one = await fetch(`${Backend}/identificarUsuario`, {
              method: 'POST',
              body: JSON.stringify(usuario),
              headers:{
                  'Content-Type': 'application/json'
              }
              })
              let two = await one.json()

              if(one.status!==200){ return false}

              let onee = await fetch(`${Backend}/usuarios/${two.datos.id}`, {
              method: 'GET',
              headers:{
                  'Content-Type': 'application/json'
              }
              })
              let twoo = await onee.json()


            if(onee.status===200){
              setUser(twoo)

              return true
            }else{
               return false
            }

     }


     const cerrarSesion=()=>{
        window.localStorage.clear();
        setMascotas([])
        setUser({})

     }

  return (
    <ContextAll.Provider value={{
    user, iniciarSesion, cerrarSesion,
    PRODUCTOSS, MASCOTAS, PLANES, SUCURSALES, USUARIOS,
    pedidos, setPedidos, productos, setProductos,
    mascotas, setMascotas, planes, setPlanes,
    sucursales, setSucursales, clientes, asesores,
    crearUsuario,
    crearPlan,crearProducto, crearSucursal, crearProspecto,
    eliminarPlan, eliminarProducto, eliminarSucursal,
    crearMascota, eliminarMascota, definirSolicitud }}>
        {props.children}

    </ContextAll.Provider>
  )
}

export default ContextoProvider
