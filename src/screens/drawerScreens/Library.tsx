import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toptabs from '../../navigation/TopTabs';
import Header from '../../components/layout/Header';

const Library = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Toptabs />
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
