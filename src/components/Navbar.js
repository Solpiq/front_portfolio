import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import{FaBars,FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'


const Navbar = () => {
  const[click,setClick]=useState(false)  
  const handleClik=()=>setClick(!click)
  return (
    <div className='header'>
        <Link to='/' ><h1></h1></Link>
        <ul className={click? 'nav-menu-active':'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Experiencias'>Experiencias</Link>
            </li>
            
            <li>
                <Link to='/miScene'>miScene</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClik}>
        {click ?(<FaTimes size={20} style={{color: '#fff' }}/>):(<FaBars size={20} style={{color: '#fff' }} />)}
        </div>
    </div>
    )
}

export default Navbar

