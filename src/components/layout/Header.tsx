import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      {/* LEFT - MENU BUTTON */}
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="menu" size={28} color="#000" />
      </TouchableOpacity>

      {/* RIGHT SIDE BUTTONS */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="search" size={26} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings" size={26} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fff',
    elevation: 5,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
});
