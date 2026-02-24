import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SCREENS} from '../constants/SCREENS';
import Songs from '../screens/topTabScreens/Songs';
import Playlists from '../screens/topTabScreens/Playlists';
import Folders from '../screens/topTabScreens/Folders';
import Albums from '../screens/topTabScreens/Albums';
import Artists from '../screens/topTabScreens/Artists';
import Genres from '../screens/topTabScreens/Genres';
import {fontSize} from '../responsive';
import {colors} from '../constants/colors';
import {Text} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';

const Tab = createMaterialTopTabNavigator();

const Toptabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.SONGS}
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              fontSize: focused ? fontSize(22) : fontSize(16), // 👈 Bigger when active
              fontWeight: '600',
              color: focused ? '#fff' : 'rgba(255,255,255,0.6)',
            }}>
            {route.name}
          </Text>
        ),
        tabBarLabelStyle: {fontWeight: '600'},
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
          height: verticalScale(3),
          borderRadius: moderateScale(2),
          // marginHorizontal: horizontalScale(1), // 👈 THIS shrinks it
        },
        tabBarItemStyle: {
          width: 'auto', // 👈 removes equal spacing
          paddingHorizontal: horizontalScale(20),
        },
        tabBarContentContainerStyle: {
          paddingHorizontal: horizontalScale(10),
        },
        tabBarScrollEnabled: true, // scroll if many tabs
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {backgroundColor: 'transparent', elevation: 0},
        sceneContainerStyle: {
          backgroundColor: 'transparent', // 🔥 VERY IMPORTANT
        },
      })}>
      <Tab.Screen name={SCREENS.SONGS} component={Songs} />
      <Tab.Screen name={SCREENS.PLAYLISTS} component={Playlists} />
      <Tab.Screen name={SCREENS.FOLDERS} component={Folders} />
      <Tab.Screen name={SCREENS.ALBUMS} component={Albums} />
      <Tab.Screen name={SCREENS.ARTISTS} component={Artists} />
      <Tab.Screen name={SCREENS.GENRES} component={Genres} />
    </Tab.Navigator>
  );
};

export default Toptabs;
