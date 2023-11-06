import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pessoa from '../cadastros/pessoa';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Pessoa}/>
        </Stack.Navigator>
    )
}

export default StackRoutes;