import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from "../../logo/logo-clean3000.png"



const Navbar = () => {
  return (
    <div className='mainNav'>
        
        <div><img src={logo} alt="" /></div>
        <nav>
            <Link>Accueil</Link>
            <Link>Avis de passage</Link>



        </nav>
    </div>
  )
}

export default Navbar