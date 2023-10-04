import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/card/Card'
import { API_URL } from '../config/constants'

const Home = ({ navigation }) => {
    const [Data, setData] = useState([]);
    const [Select, setSelect] = useState(0);
    const [Laoding, setLaoding] = useState(false);
    const [Category, setCategory] = React.useState([
        {
            id: 1,
            name: 'Hotels',
            link: 'all-hotel',
        },
        {
            id: 2,
            name: 'Car Rental Agencies',
            link: 'all-agency',

        },
        {
            id: 3,
            name: 'Tour Guides',
            link: 'all-guide',

        },
        {
            id: 4,
            name: 'Practical Infos',
            link: 'all-information',

        },

    ]);
    const getData = async () => {
        setLaoding(true);
        const response = await fetch(API_URL + `api/${Category[Select].link}`);
        const data = await response.json();
        setData(data.data);
        setLaoding(false);
    };
    const getData2 = async link => {
        setLaoding(true);
        const response = await fetch(API_URL + `api/${link}`);

        const data = await response.json();
        setData(data.data);
        setLaoding(false);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <View >
            <Header />
            <View style={styles.mycontainer}>
                <FlatList
                    data={Category}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={
                                    index == Select
                                        ? styles.btnSelect
                                        : styles.btnNoSelect
                                }
                                onPress={() => {
                                    setSelect(index);
                                    getData2(Category[index].link);
                                }}>
                                <Text
                                    style={
                                        index == Select
                                            ? styles.textSelect
                                            : styles.textNoSelect
                                    }>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={({ item, index }) => {
                        return (
                            <Card item={item} navigation={navigation} index={index} />
                        );
                    }}
                />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mycontainer: {
        marginTop: 15,
        marginBottom: 5,
        marginStart: 10,

    },
    container: {
        marginVertical: 15,
        marginHorizontal: 10,

    },
    btnSelect: {
        elevation: 4,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#17550c',
        marginEnd: 10,
    },
    btnNoSelect: {
        elevation: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#c2c2c2',
        marginEnd: 10,
    },
    textSelect: {
        color: 'white',
        fontWeight: '600'
    },
    textNoSelect: {
        color: '#000',
        fontWeight: '400'

    }
})