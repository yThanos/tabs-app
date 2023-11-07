import { Stack } from "expo-router"

const CadLayout = () => {
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
            <Stack.Screen name="index" options={{headerTitle: "Cadastros"}}/>
            <Stack.Screen name="documentos" options={{headerTitle: "Documentos"}}/>
            <Stack.Screen name="enderecos" options={{headerTitle: "Endereços"}}/>
            <Stack.Screen name="pessoa" options={{headerTitle: "Pessoa"}}/>
        </Stack>
    )
}

export default CadLayout;