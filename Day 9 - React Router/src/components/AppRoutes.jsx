import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Detail from './Detail'

const AppRoutes = () => {
  return (
    <div>

    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path='detail' element={<Detail />} /> // note here no need to add /detail
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </div>
  )
}

export default AppRoutes
