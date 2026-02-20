import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SCREENS} from '../constants/SCREENS';
import Library from '../screens/drawerScreens/Library';
import Settings from '../screens/drawerScreens/Settings';

const Drawer = createDrawerNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent', // 👈 THIS IS IMPORTANT
  },
};

const DrawerNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        initialRouteName={SCREENS.LIBRARY}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Drawer.Screen name={SCREENS.LIBRARY} component={Library} />
        <Drawer.Screen name={SCREENS.SETTINGS} component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
