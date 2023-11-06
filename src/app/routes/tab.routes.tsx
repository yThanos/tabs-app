import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabItem from '../../components/tabItem';
import HomeCadastros from '../(tabs)/cadastros';
import Home from '../(tabs)/home';
import List from '../(tabs)/perfil';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="home"
                component={Home}
                options={{
                    tabBarStyle: {height: 70, backgroundColor: "#043F63"},
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {color: "#fff", paddingBottom: 5},
                    tabBarIcon: ({focused}) => <TabItem focused={focused} icon="home"/>
                }}
                />
            <Tab.Screen
                name="cadastros"
                component={HomeCadastros}
                options={{
                    tabBarStyle: {height: 70, backgroundColor: "#043F63"},
                    tabBarLabel: "Cadastros",
                    tabBarLabelStyle: {color: "#fff", paddingBottom: 5},
                    tabBarIcon: ({focused}) => <TabItem focused={focused} icon="account-cog"/>
                }}
            />
            <Tab.Screen
                name="perfil"
                component={List}
                options={{
                    tabBarStyle: {height: 70, backgroundColor: "#043F63"},
                    tabBarLabel: "Perfil",
                    headerShown: false,
                    tabBarLabelStyle: {color: "#fff", paddingBottom: 5},
                    tabBarIcon: ({focused}) => <TabItem focused={focused} icon="account"/>
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRoutes;