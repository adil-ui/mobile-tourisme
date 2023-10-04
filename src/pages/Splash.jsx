import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2500);
    }, []);
    return (
        <View style={styles.container}>
            <Animatable.Image style={styles.logo} animation="fadeInDownBig" duration={2500} source={require('../../assets/logo.png')} tyle={styles.logo} />

        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 250,
    },
});