import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {

  const [toggle,setToggle] = useState(false)

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </div>
  )
}

export default App
