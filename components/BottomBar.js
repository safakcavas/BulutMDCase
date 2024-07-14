import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.bottomBarContainer}>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.linkContainer} onPress={navigateToHome}>
                    <Text style={styles.link}>Anasayfa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkContainer}>
                    <Text style={styles.link}>Kullanıcı Sözleşmesi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkContainer}>
                    <Text style={styles.link}>Gizlilik Sözleşmesi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconsContainer}>
                <Image source={require('../assets/face.png')} style={styles.icon} />
                <Image source={require('../assets/twitter.png')} style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBarContainer: {
        
        backgroundColor: '#333',
         // Add padding to separate icons from text links
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10, // Add padding to separate icons from text links
    },
    linkContainer: {
        flex: 1,
        alignItems: 'center',
    },
    link: {
        color: '#fff',
        fontSize: 16,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

        paddingTop: 10, // Adjust padding as needed
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft:10,
        marginRight:10
    },
});

export default BottomBar;
