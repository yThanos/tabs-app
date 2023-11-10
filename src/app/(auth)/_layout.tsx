import { Stack } from "expo-router"

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="login" options={{title: "Login"}}/>
            <Stack.Screen name="forgot" options={{title: "Esqueci a senha"}}/>
        </Stack>
    )
}

export default AuthLayout;