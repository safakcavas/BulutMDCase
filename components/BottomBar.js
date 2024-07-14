import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const BottomBar = () => {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.link}>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.link}>Kullanıcı Sözleşmesi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.link}>Gizlilik Sözleşmesi</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        top:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#333',
    },
    linkContainer: {
        flex: 1,
        alignItems: 'center',
    },
    link: {
        color: '#fff',
        fontSize: 14,
    },
    iconContainer: {
        flex: 0.5,
        alignItems: 'center',
    },
});

export default BottomBar;
