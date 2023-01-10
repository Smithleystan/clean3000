import React from 'react'
import { useSelector } from 'react-redux'
import PropsList from './PropsList'
import "../../Bootstrap/css/bootstrap.css"
import "./Liste.scss"



const Liste = () => {
  const data = useSelector(data => data.data)
  console.log(data)

  const list = data.map((avis) => {
    return (

      <PropsList
        key={avis.id}
        nom={avis.nom}
        date={avis.date}
        obersvation={avis.obersvation}
        id={avis.id}

      />
 
    )
  })

  return (
    <div className='mainList'>
      <div className='text-center screenList'>
        <div><h1>Liste avis de passages</h1></div>
        <div className='border list ' >{list}</div>
      </div>

    </div>

  )
}

export default Liste