import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [logged, setLogged] = useState(false)
    const [token, setToken] = useState(null);

    const login = () => {
        console.log("login")
        setLogged(true)
    }

    const logOut = () => {
        console.log("logout")
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{logged, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;