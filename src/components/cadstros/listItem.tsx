import { TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-paper"

const CadListItem = ({ screen, onPress, width}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{width: width * 0.8, borderWidth: 1, borderRadius: 10, margin: 5, borderColor: "#043F63", justifyContent: "space-between", flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <Icon source={screen[1]} size={30} color={"#FF7A0F"}/>
                    <Text style={{color: "#FF7A0F", padding: 5}}>{screen[0].toUpperCase()}</Text>
                </View>
                <Text style={{fontWeight:'600', fontSize: 22}}>Ver</Text>
            </View>   
        </TouchableOpacity> 
    )
}

export default CadListItem;