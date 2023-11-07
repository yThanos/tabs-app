import { useRouter } from "expo-router";
import { View, SafeAreaView } from "react-native"
import { Button, Text } from "react-native-paper";

const HomeCadastros = () => {
    const router = useRouter();
    const screens = [
        'enderecos',
        'pessoa',
        'documentos'
    ]
    return (
        <SafeAreaView>
            <View style={{height: '100%', width: '100%', padding: 15, alignItems: 'center'}}>
                <View>
                    <Text>Home Cadastros</Text>
                </View>
                <View>
                    {
                        screens.map((screen, index) => (
                            <Button key={index} onPress={() => router.push(`/cadastros/${screen}`)}>
                                <Text>{screen.toUpperCase()}</Text>
                            </Button>
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeCadastros;