import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useContext } from 'react';
import Home from './Pages/Home';
import Usuario from './Pages/Usuario';
import Tienda from './Components/Containers/Tienda';
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import { ContextAll } from './Components/Context/Contexto';
import Inicio from './Components/Containers/Inicio';
import NotFound from './Pages/NotFound';
import UsuariosCS from './Components/Containers/UsuariosCS';



function App() {

  const { user} = useContext(ContextAll);


  // ++++++++  aislar paginas +++++++++++
  const usuario=(element)=>{
    if(Object.entries(user).length===0 ){
      return <Navigate to='/'></Navigate>
    }else {
        return element  
    }
  }

  const salida=(element)=>{
    if(Object.entries(user).length!==0){
      return <Navigate to='/usuario'></Navigate>
    }else{
      return element
    }
  }

  const administrador=(element)=>{
    if(user.rol==="administrador"){
      return element
    }else{
      return <Navigate to='/usuario'></Navigate>
    }
  }
  // ++++++++++++++++++++++++++++++++
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={salida(<Home/>)} ></Route>
        <Route path='/usuario' element={usuario(<Usuario/>)} >
          <Route path= '/usuario' element={usuario(<Inicio/>)} />
          <Route path= '/usuario/Tienda' element={<Tienda />} />
          <Route path= '/usuario/Usuarios' element={administrador(<UsuariosCS/>)} />
          
        </Route>
        <Route path= '/Tienda' element={<Tienda />} />

        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
