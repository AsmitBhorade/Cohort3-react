import React from 'react'
import { useForm } from "react-hook-form";

const RHF = () => {

    console.log("RHF Rendering")

    const {handleSubmit, register, reset, formState:{errors}}  = useForm()
    //console.dir(register)
    // Here above destructured needed attribues from the big useform object.
    // register contains all required attributes like name="",required,etc

    const Submitform =(data)=> {
        console.log(data)
        reset() // resets the form fields on submit
    }

   return (

    <div className="w-80 h-screen">
      REACT HOOK FORM
      <form onSubmit={(handleSubmit(Submitform))} // handle msubmit submits form and sends data to submit form
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input
          {...register("pname")} // register collects all attributes usind spread 
          // & sets the name value inside it to given name
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
        {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <input
        {...register("category")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Category"
        />
        <input
        {...register("img")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  );
};


export default RHF
