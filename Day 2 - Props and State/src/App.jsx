import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {

  let [count,setcount]=useState(0);

  return (
    <div>

      <Navbar />
      <Hero />
      <Footer />

      <h1>Now lets Write a func for Count increment</h1>
      <div style={{fontSize:"40px"}}>Count = {count}</div>
      <button onClick={()=>{
        setcount(++count)
      }}>Increment</button>

      {/* this does not work because here only js is rendering its func only in js memory,
      the entire app.jsx is not re-rendering to again print changed count on webpage. */}
      {/* <button onClick={()=>{
        count++
        console.log(count)
      }}>Increment</button> */}

    </div>
  )
}

export default App
