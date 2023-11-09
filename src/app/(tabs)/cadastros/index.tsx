import { useRouter } from "expo-router";
import { View, SafeAreaView, useWindowDimensions, TouchableOpacity } from "react-native"
import { Icon, Text } from "react-native-paper";
import CadListItem from "../../../components/cadstros/listItem";

const HomeCadastros = () => {
    const {width, height} = useWindowDimensions();
    const router = useRouter();
    const screens = [
        ['enderecos', 'routes'],
        ['pessoa', 'account'],
        ['documentos','card-account-details']
    ]
    return (
        <SafeAreaView>
            <View style={{height: '100%', width: '100%', padding: 15, alignItems: 'center'}}>
                <View>
                    {
                        screens.map((screen, index) => (
                            <CadListItem key={index} screen={screen} onPress={()=>router.push(screen[0])} width={width}/>
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeCadastros;