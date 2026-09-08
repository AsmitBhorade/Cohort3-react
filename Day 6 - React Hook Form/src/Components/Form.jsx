import React from "react";
import { useForm } from "react-hook-form";

const Form = ({setusers,setToggle}) => {

    const {register,handleSubmit,reset, formState: {errors}}=useForm({
        mode:"onChange" // default it is onSubmit 
    })

    return (
    <form 
    onSubmit={handleSubmit((data)=> {
        console.log(data)
        reset()
        setusers(prev=>[...prev,data])
        setToggle(prev=>!prev)
    })}
    className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Create User</h2>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">Name</label>
        <input
        {...register("name",{
            required:"Name is required"
        })}
          type="text"
          placeholder="Enter full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}


      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">Contact</label>
        <input
        {...register("mobile",{
            required:"Number is required", // this error is saved in the error field of formState
            minLength:{
                value:10,
                message:"Min digits should be 10"
            },
            maxLength:{
                value:10,
                message:"Max digits should be 10"
            }
        })}
          type="number"
          placeholder="Enter contact number"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>
        {errors.mobile && <p className="text-red-400">{errors.mobile.message}</p>}


      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-700">Email</label>
        <input
        {...register("email",{
            required:"Email is required"
        })}
          type="email"
          placeholder="Enter email address"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}


      <button className="w-full cursor-pointer rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Save User
      </button>
    </form>
  );
};

export default Form;