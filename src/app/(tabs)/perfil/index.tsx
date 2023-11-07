import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const List = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View>
                <Button onPress={() => router.push("/perfil/settings")} >Configurações da conta</Button>
            </View>
        </SafeAreaView>
    )
}

export default List;