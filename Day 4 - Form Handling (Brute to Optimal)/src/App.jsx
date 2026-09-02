import React, { useState } from 'react'

// This is all Optimal code

const App = () => {

  const [formData,setFormData]=useState({})

  const handleChange= (e)=>{
    console.log(e)
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <div>
        <input
        name="name"
        onChange={handleChange} 
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Password"
      />

      <h1>This is name - {formData.name}</h1>
      <h1>This is email - {formData.email}</h1>
      <h1>This is Password - {formData.password}</h1>

    </div>
  )
}

export default App
