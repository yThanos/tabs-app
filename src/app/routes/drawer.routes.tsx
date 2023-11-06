import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabRoutes}/>
            <Drawer.Screen name="Pessoais" component={StackRoutes}/>
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;