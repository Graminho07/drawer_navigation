import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
import { Header } from "react-native/Libraries/NewAppScreen";

export function TabRoutes(){
    return(
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: 'navy',
            tabBarInactiveTintColor: 'gray',
        }}>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Home',
                    headerShown: false,
                        tabBarLabel: 'Tela A',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons 
                                name="home"
                                color={color}
                                size={size}
                            />
                        )
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons 
                            name="add"
                            color={color}
                            size={size}
                        />
                    ),
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