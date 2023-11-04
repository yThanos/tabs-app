import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerTitle: "Perfil"}}/>
        </Stack>
    )
}

export default StackLayout;