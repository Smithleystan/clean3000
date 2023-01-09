import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import logo from '../../logo/logo-clean3000.png'


const Navbar = () => {
    const [hidden, setHidden] = useState("nav__menu ")
    const click = () => { hidden === "nav__menu test" ? setHidden("nav__menu") : setHidden("nav__menu test") }
    console.log(hidden)

    return (
        <>
            <nav className="nav">
                <Link to='/' className="nav__brand"> cleen3000 </Link> 
                <ul className={hidden}>
                    <li className="nav__item"><Link to='/' className="nav__link" onClick={click} > Accueil</Link></li>
                    <li className="nav__item"><Link to='/listeavisdepassage' className="nav__link" onClick={click} >Avis de passage</Link> </li>



                </ul>
                <div onClick={click} className="nav__toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>


            </nav>


        </>
    )
}

export default Navbar