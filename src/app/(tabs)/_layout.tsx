import { Tabs } from "expo-router"
import TabItem from "../../components/tabItem"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarStyle: {height: 70, backgroundColor: "#043F63"},
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {color: "#fff", paddingBottom: 5},
                    tabBarIcon: ({focused}) => <TabItem focused={focused} icon="home"/>
                }}
                />
            <Tabs.Screen
                name="cadastros"
                options={{
                    tabBarStyle: {height: 70, backgroundColor: "#043F63"},
                    tabBarLabel: "Cadastros",
                    tabBarLabelStyle: {color: "#fff", paddingBottom: 5},
                    tabBarIcon: ({focused}) => <TabItem focused={focused} icon="account-cog"/>
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    tabBarStyle: {height: 70, backgroundColor: "#043F63"},
                    tabBarLabel: "Perfil",
                    headerShown: false,
                    tabBarLabelStyle: {color: "#fff", paddingBottom: 5},
                    tabBarIcon: ({focused}) => <TabItem focused={focused} icon="account"/>
                }}
            />
        </Tabs>
    )
}