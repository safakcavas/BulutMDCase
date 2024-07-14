import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRoute } from '@react-navigation/native';
import data from "../data/data.json";
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';

const MovieScreen = () => {
  const route = useRoute();
  const { type } = route.params; // Get type from route params

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest'); // Default sorting option
  const [open, setOpen] = useState(false); // State to control dropdown open/close

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleSort = (option) => {
    setSortOption(option);
    setOpen(false); // dropdown ile seçim yapıldıktan sonra dropdwon kapatılıyor
  };

  const filterData = (entries) => {
    let filteredEntries = entries;

  // film yada dizi tipine göre filtreleme yapılıyor
    if (type) {
      filteredEntries = filteredEntries.filter(item => item.programType === type);
    }

    // Arama sorgusu 3 karakterden büyükse filtreleme yapılıyor
    if (searchQuery.length >= 3) {
      filteredEntries = filteredEntries.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    } else {
      filteredEntries = filteredEntries.slice(0, 18); // ilk 18 veri gösteriliyor
    }

    return filteredEntries;
  };

    // Sıralama islemi
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

  // dropdown içerisindeki seçenekler
  const dropDownItems = [
    { label: 'Yeniye Göre Sırala', value: 'newest' },
    { label: 'Eskiye Göre Sırala', value: 'oldest' },
    { label: 'Rastgele Sırala', value: 'random' },
  ];

  return (
    <SafeAreaView>

    <ScrollView>
      <Header />
      <Text style={styles.header}>{type === 'movie' ? 'Filmler' : 'Diziler'}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Film / Dizi / Oyuncu ara"
        value={searchQuery}
        onChangeText={handleSearch}
        />
      <DropDownPicker
        open={open}
        value={sortOption}
        items={dropDownItems}
        setOpen={setOpen}
        setValue={handleSort}
        placeholder="Sırala"
        containerStyle={styles.pickerContainer}
        style={styles.picker}
        dropDownStyle={styles.dropDownPicker}
        />
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
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  
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
    paddingLeft: 11
  },
  searchInput: {
    height: 40,
    margin: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  pickerContainer: {
    height: 40,
    marginBottom: 15,
  
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width:360,
   marginLeft:16,
 
  },

  card: {
  
marginLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: "45%"
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
