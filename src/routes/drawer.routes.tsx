import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'; // Import the NavigationContainer

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
import { ScreenC } from "../screens/ScreenC";
import { Header } from "react-native/Libraries/NewAppScreen";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
      <Navigator>
        <Screen
          name='screenA'
          component={ScreenA}
          options={{
            drawerLabel: 'Tela A',
            drawerIcon: () => <MaterialIcons name="home" size={22} />,
          }}
        />
        <Screen
          name='screenB'
          component={ScreenB}
          options={{
            drawerLabel: 'Tela B',
            drawerIcon: () => <MaterialIcons name="home" size={22} />,
          }}
        />
        <Screen
          name='screenC'
          component={ScreenC}
          options={{
            drawerLabel: 'Tela C',
            drawerIcon: () => <MaterialIcons name="home" size={22} />,
          }}
        />
      </Navigator>
  );
}
