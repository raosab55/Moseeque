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

const Tab = createMaterialTopTabNavigator();

const Toptabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.SONGS}
      screenOptions={{
        tabBarLabelStyle: {fontSize: fontSize(18)},
        tabBarIndicatorStyle: {backgroundColor: colors.white},
        tabBarScrollEnabled: true, // scroll if many tabs
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {backgroundColor: 'transparent', elevation: 0},
        sceneContainerStyle: {
          backgroundColor: 'transparent', // 🔥 VERY IMPORTANT
        },
      }}>
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
