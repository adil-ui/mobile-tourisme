import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { UserCircleIcon } from 'react-native-heroicons/solid';

const Header = ({ navigation }) => {
    return (
        <View style={styles.headContainer}>
            <Image source={require('../../assets/logo2.png')} tyle={styles.logo} />
            <UserCircleIcon color="#17550c" size={32} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({

    headContainer: {
        flexDirection: 'row',
        paddingTop: 28,
        paddingBottom: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },


});