import React from 'react'
import { Link } from 'react-router-dom'
import "../../Bootstrap/css/bootstrap.css"
import './Liste.scss' 


const PropsList = ({ nom, id, date, obersvation }) => {
    return (
        <div className='listProps' >
            <div><Link className='link' to={`/detailavisdepassage/${id}` }>{nom} - {date} </Link> </div>
        </div>
    )
}

export default PropsList