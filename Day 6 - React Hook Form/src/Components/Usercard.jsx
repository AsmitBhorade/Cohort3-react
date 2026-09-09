import React from "react";

const Usercard = ({
  user,
  setToggle,
  deleteUser,
  setUpdatedData,
}) => {
  const updateUser = () => {
    setUpdatedData(user);
    setToggle(false);
  };

  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <p className="mb-5 text-gray-600">
        <span className="font-semibold">Contact:</span> {user.mobile}
      </p>

      <div className="flex gap-3">
        <button
          onClick={updateUser}
          className="flex-1 cursor-pointer rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-white transition hover:bg-yellow-600"
        >
          Update
        </button>

        <button
          onClick={() => deleteUser(user.id)}
          className="flex-1 cursor-pointer rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;