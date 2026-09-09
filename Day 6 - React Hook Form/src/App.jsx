import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Usercard from "./Components/Usercard";
import Form from "./Components/Form";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [toggle, setToggle] = useState(false);
  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);

    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div>
      <Navbar
        setToggle={setToggle}
        setUpdatedData={setUpdatedData}
      />

      {toggle ? (
        <div className="flex flex-wrap gap-6 p-6">
          {users.map((user) => (
            <Usercard
              key={user.id}
              user={user}
              setToggle={setToggle}
              setUpdatedData={setUpdatedData}
              deleteUser={deleteUser}
            />
          ))}
        </div>
      ) : (
        <Form
          users={users}
          setUsers={setUsers}
          setToggle={setToggle}
          updatedData={updatedData}
          setUpdatedData={setUpdatedData}
        />
      )}
    </div>
  );
};

export default App;