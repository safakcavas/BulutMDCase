import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import data from "../data/data.json";
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';

const MovieScreen = () => {
  const route = useRoute();
  const { type } = route.params; // Get type from route params

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const filterData = (entries) => {
    let filteredEntries = entries;

    if (type) {
      filteredEntries = filteredEntries.filter(item => item.programType === type);
    }

    if (searchQuery.length >= 3) {
      filteredEntries = filteredEntries.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    } else {
      filteredEntries = filteredEntries.slice(0, 18);
    }

    return filteredEntries;
  };

  const sortData = (entries) => {
    switch (sortOption) {
      case 'title':
        return [...entries].sort((a, b) => a.title.localeCompare(b.title));
      case 'newest':
        return [...entries].sort((a, b) => b.releaseYear - a.releaseYear);
      case 'oldest':
        return [...entries].sort((a, b) => a.releaseYear - b.releaseYear);
      case 'random':
        return [...entries].sort(() => 0.5 - Math.random());
      default:
        return entries;
    }
  };

  const filteredData = sortData(filterData(data.entries));

  return (
    <ScrollView>
      <Header />
      <Text style={styles.header}>{type === 'movie' ? 'Filmler' : 'Diziler'}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Film / Dizi / Oyuncu ara"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Picker
        selectedValue={sortOption}
        style={styles.picker}
        onValueChange={(itemValue) => handleSort(itemValue)}
      >
        <Picker.Item label="Yeniye Göre Sırala" value="newest" />
        <Picker.Item label="Eskiye Göre Sırala" value="oldest" />
        <Picker.Item label="Rastgele Sırala" value="random" />
      </Picker>
      <View style={styles.container}>
        {filteredData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.images["Poster Art"].url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>
      <BottomBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#484848',
    fontSize: 18,
    marginBottom: 10,
    width: "fit-content",
    height: 40,
    color: 'white',
    padding: 8,
    paddingLeft: 15
  },
  searchInput: {
    height: 40,
    margin:15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: "50%"
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default MovieScreen;
