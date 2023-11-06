import { Link, Stack, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const List = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#043F63',
                        },
                    }}
                />
            <View>
                <Button onPress={() => router.push("/perfil/settings")} >Configurações da conta</Button>
            </View>
        </SafeAreaView>
    )
}

export default List;