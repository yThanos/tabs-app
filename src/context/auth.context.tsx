import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (user) => {
        setLoading(true)
        setToken(user.token)
        setUser(user)
        AsyncStorage.setItem("user", JSON.stringify(user)).then(()=>{setLoading(false)})
    }

    const logOut = () => {
        AsyncStorage.removeItem("user")
        setToken(null)
        setUser(null)
        setLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setLoading(true)
            const user = await AsyncStorage.getItem("user")
            if(!user) return setLoading(false)
            setUser(JSON.parse(user))
            setToken(JSON.parse(user).token)
            setLoading(false)
        } catch (e) {
            console.log("LoggedIn Error: ", e)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{token, loading, user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;