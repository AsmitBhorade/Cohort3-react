import React, { useState } from 'react'
// import RHF from './RHF'
import Navbar from './Components/Navbar'
import Usercard from './Components/Usercard'
import Form from './Components/Form'

const App = () => {

  const [users, setUsers] = useState([])

  const [toggle,setToggle] = useState(false)
  
  return (
    <div>
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-6 p-6">
          {users.map((user, index) => (
            <Usercard key={index} users={user} />
          ))}
        </div>
      ) : (
        <Form setusers={setUsers} setToggle={setToggle} />
      )}
    </div>
  );
};

export default App
