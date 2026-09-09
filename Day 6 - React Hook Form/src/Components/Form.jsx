import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({
  users,
  setUsers,
  setToggle,
  updatedData,
  setUpdatedData,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(updatedData || {});
  }, [updatedData, reset]);

  const formSubmit = (data) => {
    let updatedUsers;

    if (updatedData) {
      updatedUsers = users.map((user) =>
        user.id === updatedData.id
          ? { ...data, id: updatedData.id }
          : user
      );
    } else {
      updatedUsers = [...users, { ...data, id: nanoid() }];
    }

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    reset();
    setUpdatedData(null);
    setToggle(true);
  };

  const cancelForm = () => {
    reset();
    setUpdatedData(null);
    setToggle(true);
  };

  return (
    <div className="flex justify-center p-6">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex w-full max-w-sm flex-col gap-3 rounded-xl bg-white p-6 shadow-lg"
      >
        <h1 className="text-xl font-bold text-gray-800">
          {updatedData ? "Update User" : "Create User"}
        </h1>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="rounded border p-2 outline-none"
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
          className="rounded border p-2 outline-none"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Mobile number must contain 10 digits",
            },
          })}
          className="rounded border p-2 outline-none"
          type="tel"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-sm text-red-500">{errors.mobile.message}</p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
        >
          {updatedData ? "Update" : "Add User"}
        </button>

        <button
          type="button"
          onClick={cancelForm}
          className="rounded-lg bg-gray-500 px-4 py-2 font-semibold text-white"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;