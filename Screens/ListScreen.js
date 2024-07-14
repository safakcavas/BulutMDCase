import React, { useState } from 'react';
import { View, TextInput, Picker, FlatList, Text, StyleSheet } from 'react-native';


const ListScreen = () => {
  const [search, setSearch] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.header}>{type}</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={search}
        onChangeText={setSearch}
      />
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default ListScreen;
