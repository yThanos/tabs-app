import { Icon } from 'react-native-paper';

const TabItem = ({focused, icon}) => {
    return (
            <Icon source={icon} size={focused?60:50} color={focused?"#FF7A0F":"#FFFFFF"}/>
    )
}

export default TabItem;