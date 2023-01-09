import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Navbar from './component/navbar/Navbar'
import NewAvis from './pages/newAvis/NewAvis'




const Root = () => {
  return (
    <div>
        <Router>
        <Navbar/>
            <Routes>
               <Route path='/' element={< App />} />
               <Route path='/nouvelavisdepassage' element={< NewAvis />}/>
            </Routes>
        </Router>

    </div>
  )
}

export default Root