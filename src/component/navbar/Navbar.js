import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"


const Navbar = () => {
    const [hidden, setHidden] = useState("nav__menu ")
    const click = () => { hidden === "nav__menu test" ? setHidden("nav__menu") : setHidden("nav__menu test") }
    console.log(hidden)

    return (
        <>
            <nav className="nav">
                <Link to='/' className="nav__brand">clean3000</Link> 
                <ul className={hidden}>
                    <li className="nav__item"><Link to='/' className="nav__link"> Accueil</Link></li>
                    <li className="nav__item"><Link className="nav__link">Avis de passage</Link> </li>



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