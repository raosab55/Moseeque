import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SCREENS} from '../constants/SCREENS';
import Library from '../screens/drawerScreens/Library';
import Settings from '../screens/drawerScreens/Settings';
import CustomDrawer from '../components/CustomDrawer';
import {fontSize} from '../responsive';
import {horizontalScale} from '../utils/metrics';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#FFFFFF',
          drawerInactiveTintColor: 'rgba(255,255,255,0.75)',
          // drawerActiveBackgroundColor: 'rgba(255,255,255,0.12)',
          // drawerInactiveBackgroundColor: '#000000',
          // drawerContentStyle: {
          //   width: horizontalScale(10),
          // },
          // drawerContentContainerStyle: {
          //   width: horizontalScale(10),
          // },
          drawerLabelStyle: {
            fontSize: fontSize(20),
            fontWeight: 'bold',
            letterSpacing: 2,
          },
          drawerType: 'front',
          drawerPosition: 'left',
          drawerStyle: {
            backgroundColor: 'transparent',
            width: horizontalScale(270),
          },
          // drawerItemStyle: {
          //   backgroundColor: 'transparent',
          // },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Drawer.Screen
          name={SCREENS.LIBRARY}
          component={Library}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="library-music" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={SCREENS.SETTINGS}
          component={Settings}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="settings" size={20} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
