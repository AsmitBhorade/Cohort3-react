import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { Auth } from '../Context/AuthContext';

const Login = () => {

    const {loggedInUser,setloggedInUser} = useContext(Auth)

  const navigate= useNavigate();

  const formsubmit = (data)=>{
    console.log(data);
    setloggedInUser([...loggedInUser,data])
    reset()
  }

  const {register, handleSubmit, reset, formState:{errors}} =useForm();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        <div className="px-6 py-10 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-md">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Sign in
            </h2>
            <p className="mt-2 text-slate-500">
              Enter your details to access your account.
            </p>

            <form
              onSubmit={(handleSubmit(formsubmit))}
              className="mt-8 space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <input
                  {...register("email",{
                    required:"Email is Required"
                  })}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  {...register("password",{
                    required:"Password is Required",
                    minLength:{
                      value:6,
                      message:"Min Length Should be 6"
                    }
                  })}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/25"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don’t have an account?{" "}
              <button
                onClick={()=>navigate("/register")}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </button>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;