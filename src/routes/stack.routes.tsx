import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
import { Header } from "react-native/Libraries/NewAppScreen";

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Home',
                    headerShown: false
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Navigator>
    )
}