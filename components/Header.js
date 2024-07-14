import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>BulutMD</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme Başlat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Header;
