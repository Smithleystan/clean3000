import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Bootstrap/css/bootstrap.css'
import './App.css'





const App = () => {



  return (
    <div className='row gap-2 main screen' >
     <Link to='/nouvelavisdepassage' className='col-md border border-5 text-center btn' >nouvelle avis de passage</Link>
    <Link to='/listeavisdepassage' className='col-md border border-5 text-center btn' >Liste des avis de passage</Link>


      <div></div>

    </div>
  )
}

export default App