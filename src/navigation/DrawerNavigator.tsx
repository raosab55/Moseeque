import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../constants/SCREENS';
import Library from '../screens/drawerScreens/Library';
import Settings from '../screens/drawerScreens/Settings';
import AppGradient from '../components/AppGradient';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <AppGradient>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={SCREENS.LIBRARY}
          // screenOptions={{
          //   headerShown: false,
          //   drawerStyle: {
          //     backgroundColor: 'transparent',
          //   },
          //   sceneContainerStyle: {
          //     backgroundColor: 'transparent',
          //   },
          // }}
        >
          <Drawer.Screen name={SCREENS.LIBRARY} component={Library} />
          <Drawer.Screen name={SCREENS.SETTINGS} component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppGradient>
  );
};

export default DrawerNavigator;
