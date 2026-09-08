import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <nav className="flex items-center justify-between bg-blue-700 px-6 py-4 text-white shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-700">
          U
        </div>
        <span className="text-xl font-bold">Users</span>
      </div>

      <button onClick= {() => setToggle(prev=>!prev)} className="cursor-pointer rounded-lg bg-white px-5 py-2 font-semibold text-blue-700 transition hover:bg-blue-100">
        + Create User
      </button>
    </nav>
  );
};

export default Navbar;