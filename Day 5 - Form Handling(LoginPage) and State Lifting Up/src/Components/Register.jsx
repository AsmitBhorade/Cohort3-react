import React, { useState } from 'react'

const Register = ({setToggle}) => {

    const [formData,setformData]=useState({
        name:"",
        email:"",
        password:""
    })

    const [users,setUsers]=useState([])

    const handleChange = (e)=>{
        setformData({...formData, [e.target.name]:e.target.value})
    }

 const handleSubmit=(e)=>{
        e.preventDefault()
        
        setUsers([...users, formData])

        //to clear the input on  -  value tag is used for this only 
        // value tag enables 2 way bnding between react and input
        setformData({
            name:"",
            email:"",
            password:""
        })
    }

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <input onChange={handleChange}
          value={formData.name}
          required
          name='name'
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />

        <input onChange={handleChange}
          value={formData.email}
          required
          name='email'
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input onChange={handleChange}
          value={formData.password}
          required
          name='password'
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an Account?{" "}
        <span onClick={()=> setToggle(prev=> !prev)}
          className="text-blue-600 cursor-pointer">
          Login here
        </span>
      </p>
    </div>
  )
}

export default Register
