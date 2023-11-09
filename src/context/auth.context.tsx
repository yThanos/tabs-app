import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            setLoading(true)
            const storagedUser = await AsyncStorage.getItem('user')
            const storagedToken = await AsyncStorage.getItem('token')

            if(storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser))
                setToken(storagedToken)
            }
            setLoading(false)
        }
        loadStorageData()
        }, [])

    const login = async (user) => {
        setLoading(true)
        await AsyncStorage.setItem('user', JSON.stringify(user))
        await AsyncStorage.setItem('token', user.token)
        setToken(user.token)
        setUser(user)
        setLoading(false)
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('token')
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{login, logOut, setToken, user, token, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;