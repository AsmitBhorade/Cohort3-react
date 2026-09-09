import React from "react";

const Navbar = ({ setToggle, setUpdatedData }) => {
  const createUser = () => {
    setUpdatedData(null);
    setToggle(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-xl font-bold">User Management</h1>

      <button
        onClick={createUser}
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;