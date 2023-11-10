import AuthProvider from "../context/auth.context"
import StackLayout from "."

const Layout = () =>{
    return(
        <AuthProvider>
            <StackLayout />
        </AuthProvider>
    )
}

export default Layout;