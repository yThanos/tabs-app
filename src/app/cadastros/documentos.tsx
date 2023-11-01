import { Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

const Documentos = () => {
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                title: 'Documentos',
                headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#043F63',
                    },
                }}
            />
            <View>
                <Text>Documentos</Text>
            </View>
        </SafeAreaView>
    )
}

export default Documentos;