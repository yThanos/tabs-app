import { View } from "react-native"
import { Text, Icon } from "react-native-paper"


const HorizontalCards = ({item, width, index, length}) => {
    return (
        <View style={{padding: 15, width: width * 0.38, margin:10, marginRight:(index == length - 1)?35: 10}}>
            <Text variant="displayMedium" style={{color: "#FF7A0F", fontSize: 14, marginBottom: -10}}>{item[2]}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ccc", borderRadius: 5, padding: 15, width: width * 0.4, alignItems: 'center'}}>
                <Text variant="displayMedium" style={{color: "#043F63", fontWeight: "bold", fontSize: 26}}>{item[0]}</Text>
                <Icon source={item[1]} size={30} color="#043F63"/>
            </View>
        </View>
    )
}

export default HorizontalCards;