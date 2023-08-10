import { createContext, useContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ROLES } from "../../constants";
// import useAuth from "../components/hooks/useAuth";


export const AuthContext = createContext(null);
export const useAuthContext=()=>useContext(AuthContext)
const AuthProvider=({children})=>{
 

const data=useAuth()
return (
    <AuthContext.Provider value={ data }>
        { children }
    </AuthContext.Provider>
    )
}
export default  AuthProvider;