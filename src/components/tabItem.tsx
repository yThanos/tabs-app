import { Text, View } from "react-native"
import { Icon } from 'react-native-paper';

const TabItem = ({focused, icon}) => {
    return (
            <Icon source={icon} size={50} color={"#FFFFFF"}/>
    )
}

export default TabItem;