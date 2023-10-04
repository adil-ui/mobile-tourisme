import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const Visit = ({ navigation, route }) => {
    const { url } = route.params;
    return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};

export default Visit;

const styles = StyleSheet.create({});