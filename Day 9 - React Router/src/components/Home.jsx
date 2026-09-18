import { Outlet, useNavigate } from "react-router";

export default function Home() {

  let navigate =useNavigate()

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
      <button onClick={()=> navigate('/home/detail')}>Go to Detail Page</button>
      {/* This is using useNavigate hook, but we can do it using navlink also */}
      <Outlet /> 
      {/* // i have made this container to accept children */}
    </div>
  );
}