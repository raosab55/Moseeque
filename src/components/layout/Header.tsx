import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {colors} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/metrics';

const Header = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      {/* LEFT - MENU BUTTON */}
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="menu" size={28} color={colors.white} />
      </TouchableOpacity>

      {/* RIGHT SIDE BUTTONS */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="search" size={26} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings" size={26} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: horizontalScale(15),
  },
});
