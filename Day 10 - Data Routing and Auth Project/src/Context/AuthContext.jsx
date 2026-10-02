import { createContext, useState } from "react";

export const Auth=createContext();

export const AuthProvider= ({children}) =>{

    const [registeredUsers, setregisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [] )

    const [loggedInUser, setloggedInUser] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) )

    console.log("registered users->", registeredUsers);
    console.log("loggedin users->", loggedInUser);

    return ( <Auth.Provider value={
        {registeredUsers,setregisteredUsers,loggedInUser,setloggedInUser}}>
        {children}
        </Auth.Provider>
    )
}