import AuthProvider from "../auth.context"
import StackLayout from "./appNav"

const Layout = () =>{
    return(
        <AuthProvider>
            <StackLayout />
        </AuthProvider>
    )
}

export default Layout;