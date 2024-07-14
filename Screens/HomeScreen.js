import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <HomeContent navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
