import { Stack, useSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ListPage = () => {
    const { id } = useSearchParams();

    return (
        <View>
            <Stack.Screen options={{headerTitle: `List #${id}`}} />
            <Text>List page for id: {id}</Text>
        </View>
    )
}

export default ListPage;