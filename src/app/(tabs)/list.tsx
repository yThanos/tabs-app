import { Link } from "expo-router";
import { Text, View } from "react-native";

const List = () => {
    return (
        <View>
            <Text>List</Text>
            <Link href="/list/1">List #1</Link>
            <Link href="/list/2">List #2</Link>
            <Link href="/list/3">List #3</Link>
        </View>
    )
}

export default List;