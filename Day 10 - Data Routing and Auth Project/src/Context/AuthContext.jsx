import { createContext, useState } from "react";

export const Auth=createContext();

export const AuthProvider= ({children}) =>{

    const [registeredUsers, setregisteredUsers] = useState([])

    const [loggedInUser, setloggedInUser] = useState([])

    console.log("registered users->", registeredUsers);
    console.log("loggedin users->", loggedInUser);

    return ( <Auth.Provider value={
        {registeredUsers,setregisteredUsers,loggedInUser,setloggedInUser}}>
        {children}
        </Auth.Provider>
    )
}