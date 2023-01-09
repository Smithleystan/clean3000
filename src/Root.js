import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Navbar from './component/navbar/Navbar'
import Detail from './pages/detailAvis/Detail'
import Liste from './pages/liste/Liste'
import NewAvis from './pages/newAvis/NewAvis'





const Root = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={< App />} />
          <Route path='/nouvelavisdepassage' element={< NewAvis />} />
          <Route path='/listeavisdepassage' element={<Liste />} />
          <Route path='/detailavisdepassage/:id' element={<Detail/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default Root