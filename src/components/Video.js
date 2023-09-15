import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'
import videohome from '../assets/videohome.mp4'
const Video = ()=>{
  return( 
  <div className='hero'>
    <video autoPlay loop muted id='video'>
      <source src={videohome} type='video/mp4'/>
    </video>
  
  <div className='content'>
    <h1>Hola, mi nombre es Marisol</h1>
    <p1>Soy especialista en Gestión integral de sistemas, actualemte me estoy formando con Programador</p1>
    <p2>Si quieres saber más de mí pincha en el botón</p2>
  
    <div>
      <Link to='/experiencias' className='btn'> experiencias</Link>
      <Link to='/miScene' className='btn'>miScene </Link>
      
    </div>
  </div>
  </div>
    

  )
  
  




}


export default Video