import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {fontSize} from '../responsive';
import {moderateScale, verticalScale} from '../utils/metrics';

const CustomDrawer = (props: any) => {
  return (
    <LinearGradient
      colors={['#9013fe', '#1a237e']}
      start={{x: 0.7, y: 0.96}}
      end={{x: 0.3, y: 0.04}}
      style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
        {/* Optional Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Moseeque</Text>
        </View>

        {/* Drawer Items */}
        <View style={{flex: 1}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  header: {
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  title: {
    color: 'white',
    fontSize: fontSize(30),
    fontWeight: 'bold',
    letterSpacing: 4,
  },
});
