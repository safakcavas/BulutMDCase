import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BottomBar from './BottomBar';
const items = [
  { title: 'Film', image: require('../assets/film.jpg'),type:'series'},
  { title: 'Dizi', image: require('../assets/dizi.jpg'),type:'movie'},
];

const HomeContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Popüler Başlıklar</Text>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate("Film", { type: item.type })}
        >
          <Image  resizeMode='stretch' source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text> 
        </TouchableOpacity>
      ))}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
flex:1
  },
  header: {
    backgroundColor: '#484848',
    fontSize: 18,
    marginBottom: 10,
    width: "fit-content",
    height:40,
    color: 'white',
    padding:8,
    paddingLeft:15
  },
  card: {

 
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "75%",
    height: 200,
    borderRadius: 10,
    
  },
  title: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeContent;
