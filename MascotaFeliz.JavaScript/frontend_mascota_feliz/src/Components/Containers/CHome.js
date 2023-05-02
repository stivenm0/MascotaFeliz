import React, { useContext } from 'react'
import Header from '../Home/Header'
import Main from '../Home/Main'
import Nav from '../Home/Nav'
import Footer from '../Home/Footer'
import {useNavigate} from 'react-router-dom'
import '../../Styles/Home.css'
import swal from 'sweetalert';

function CHome() {

  
  
  let N = useNavigate();

  const ingreso=(valor)=>{
    N('/usuario')
    if(valor){
       N('/usuario')
    }else{
      swal('No tienes acceso', '', 'error')
    } 

  }


  return (
    <>
    <Nav  ></Nav>
    <Header ingreso={ingreso} ></Header>
    <Main></Main>
    <Footer></Footer>
 

    </>
  )
}

export default CHome