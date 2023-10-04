import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BanknotesIcon, ChevronLeftIcon, CurrencyDollarIcon, EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon, StarIcon } from 'react-native-heroicons/solid'
import { API_URL } from '../config/constants'

const Details = ({ navigation, route }) => {
    const data = route?.params?.param
    return (
        <ScrollView style={styles.container}>
            <View >
                <View tyle={styles.pictureContainer}>
                    <Image source={{ uri: API_URL + data?.picture }} style={styles.picture} />
                    <TouchableOpacity style={styles.btnPrev} onPress={() => navigation.navigate('Home')}>
                        <ChevronLeftIcon color="#fff" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.geo}>
                    {data?.role ?
                        <Text style={styles.title}>{data?.name}</Text>
                        :
                        <Text style={styles.title}>{data?.title}</Text>
                    }

                </View>
                {data?.star || data?.price || data?.city?.name ?
                    <View style={styles.detailsContainer}>
                        {data?.star &&
                            <View style={styles.details1}>
                                <View style={styles.detailsStyle}>
                                    <StarIcon color="#17550c" size={30} />
                                </View>
                                <View>
                                    <Text style={styles.star}>{data?.star}</Text>
                                    <Text style={styles.star}>Star</Text>
                                </View>
                            </View>
                        }

                        {data?.price &&
                            <View style={styles.details}>
                                <View style={styles.detailsStyle}>
                                    <CurrencyDollarIcon color="#17550c" size={30} />
                                </View>
                                <View>
                                    <Text style={styles.star}>{data?.price}</Text>
                                    <Text style={styles.star}>Dh/night</Text>
                                </View>
                            </View>
                        }

                        {data?.city?.name &&
                            <View style={styles.details}>
                                <View style={styles.detailsStyle}>
                                    <MapPinIcon color="#17550c" size={30} />
                                </View>
                                <View>
                                    {data?.city?.name !== 'Maroc' &&
                                        <Text style={styles.star}>City</Text>
                                    }

                                    <Text style={styles.star}>{data?.city?.name}</Text>
                                </View>
                            </View>
                        }

                    </View>
                    : null
                }
                <Text style={styles.description}>{data?.description}</Text>
                {data?.phone || data?.email || data?.address ?
                    <View style={styles.contactContainer}>
                        <View style={styles.contact}>
                            <PhoneIcon color="#17550c" size={22} />
                            <Text style={styles.contactText}>+212 {data?.phone}</Text>
                        </View>
                        <View style={styles.contact}>
                            <EnvelopeIcon color="#17550c" size={22} />
                            <Text style={styles.contactText}>{data?.email}</Text>
                        </View>
                        <View style={styles.contact}>
                            <MapPinIcon color="#17550c" size={24} />
                            <Text style={styles.contactText}>{data?.address}</Text>
                        </View>

                    </View>
                    : null
                }
                {data?.link ?
                    <TouchableOpacity style={styles.btnStyle} onPress={() =>
                        navigation.navigate('Visit', {
                            url: data?.link,
                        })}>
                        <Text style={styles.btnText} >Visit website</Text>
                    </TouchableOpacity>
                    : null}


            </View>
        </ScrollView >
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingHorizontal: 15,
        backgroundColor: 'white'
    },

    picture: {
        width: '100%',
        height: 250,
        borderRadius: 15,
    },
    btnPrev: {
        position: 'absolute',
        top: 8,
        start: 8,
        backgroundColor: '#a92220',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    title: {
        color: '#a92220',
        fontWeight: '600',
        fontSize: 21,

    },
    geo: {
        marginTop: 12,
        verticalAlign: 'middle',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    geoText: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    city: {
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 50,
        fontWeight: '500',
        fontSize: 17,
        color: '#a92220',
        backgroundColor: '#ffa5a4',
    },
    address: {
        marginTop: 12,
        verticalAlign: 'middle',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#4d4d4d',
        fontStyle: 'italic',
        paddingStart: 3
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    details1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '31%'

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '35%'

    },
    detailsStyle: {
        padding: 12,
        backgroundColor: '#71c89a',
        borderRadius: 8,
        marginEnd: 5
    },
    star: {
        fontSize: 16,
        color: '#17550c',
        fontWeight: '500',
    },
    description: {
        fontSize: 15,
        lineHeight: 18,
        marginTop: 5,
        marginBottom: 10,
        color: '#6d6d6d',
        textAlign: 'justify'
    },
    contactContainer: {
        backgroundColor: '#d2d4d5',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 5,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    contactText: {
        fontSize: 18,
        marginStart: 10,
        marginEnd: 10,
        fontWeight: '500',

    },
    btnStyle: {
        backgroundColor: '#a92220',
        textAlign: 'center',
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 40,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
    },
})