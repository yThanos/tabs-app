import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#043F63',
            },
            headerTitleStyle: {
                fontWeight: '500',
                fontFamily: 'Oxanium-Regular',
                fontSize: 24
            }
        }}>
            <Stack.Screen name="index" options={{headerTitle: "Perfil"}}/>
            <Stack.Screen name="settings" options={{headerTitle: "Configurações"}}/>
        </Stack>
    )
}

export default StackLayout;