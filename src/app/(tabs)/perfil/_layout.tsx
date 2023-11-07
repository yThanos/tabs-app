import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerTitle: "Perfil"}}/>
            <Stack.Screen name="settings" options={{headerTitle: "Configurações"}}/>
        </Stack>
    )
}

export default StackLayout;