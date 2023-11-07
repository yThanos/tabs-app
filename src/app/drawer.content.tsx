import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-paper';

const CustomDrawerContent = ({navigation}) => {
    const router = useRouter();
    return (
        <DrawerContentScrollView>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingRight: 15}}>
            <View style={{flexDirection: "row", padding: 15, alignItems: 'center'}}>
                <Avatar.Icon icon={"account"} />
                <Text style={{fontSize: 22, paddingLeft: 10}}>Vitor</Text>
            </View>
                <TouchableOpacity onPress={()=> {
                    AsyncStorage.removeItem("logged");
                    navigation.closeDrawer();
                }}>
                    <Icon source={"logout"} size={30}/>
                </TouchableOpacity>
            </View>
            <DrawerItem
                label="Home"
                icon={({color, size, focused}) => <Icon source={"home"} color={focused?"#FF7A0F":color} size={size}/>}
                onPress={() => {
                router.push('home');
                }}
            />
            <DrawerItem
                label="Option 2"
                icon={({color, size, focused}) => <Icon source={"cog"} color={focused?"#FF7A0F":color} size={size}/>}
                onPress={() => {
                router.push('Option2');
                }}
            />
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
