import { Link } from "expo-router";
import { Text, View } from "react-native";

const List = () => {
    return (
        <View>
            <Text>List</Text>
            <Link href="/perfil/settings">Configurações da conta</Link>
        </View>
    )
}

export default List;