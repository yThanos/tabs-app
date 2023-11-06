import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-paper';

const CustomDrawerContent = () => {
    const router = useRouter();
    return (
        <DrawerContentScrollView>
            <View style={{flexDirection: "row", padding: 15, alignItems: 'center'}}>
                <Avatar.Icon icon={"account"} />
                <Text style={{fontSize: 22, paddingLeft: 10}}>Vitor</Text>
            </View>
            <DrawerItem
                label="Home"
                icon={({color, size, focused}) => <Icon source={"home"} color={color} size={size} />}
                onPress={() => {
                router.push('home');
                }}
            />
            <DrawerItem
                label="Option 2"
                onPress={() => {
                router.push('Option2');
                }}
            />
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
