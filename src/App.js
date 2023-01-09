import React from 'react'
import { Link } from 'react-router-dom'
import './Bootstrap/css/bootstrap.css'


const App = () => {
  return (
    <div >
      <div className='text-center'><Link to='/nouvelavisdepassage' >nouvelle avis de passage</Link></div>
    </div>
  )
}

export default App