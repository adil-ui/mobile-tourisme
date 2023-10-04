import { Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react'
import cardStyle from "./style";
import { API_URL } from "../../config/constants";
import { MapPinIcon } from "react-native-heroicons/solid";


const Card = ({ item, navigation, index }) => {
    return (
        <View style={cardStyle.card}>
            <View style={cardStyle.ImageContainer}>
                <Image source={{ uri: API_URL + item.picture }} style={cardStyle.cardImage} />
                {/* <Image source={require('../../../assets/farah.jpg')} style={cardStyle.cardImage} /> */}
            </View>
            <View style={cardStyle.cardText}>
                <View style={cardStyle.cardTextContainer}>
                    {item.role ?
                        <Text style={cardStyle.cardTitle}>{item.name}</Text>
                        : <Text style={cardStyle.cardTitle}>{item.title}</Text>
                    }
                    {item.star && <Text style={cardStyle.cardStar}>{item.star}-star</Text>}
                    {item.price ?
                        item.role == 'Agence' ?
                            <Text style={cardStyle.cardPrice}>{item.price} Dh/day</Text>
                            : <Text style={cardStyle.cardPrice}>{item.price} Dh/night</Text>
                        : null
                    }

                </View>
                {item.city?.name &&
                    <View style={cardStyle.geo}>
                        <MapPinIcon color="#c2c2c2" size={18} />
                        <Text  >
                            {item.city?.name}
                        </Text>
                    </View>
                }
                <TouchableOpacity style={cardStyle.btnAdd} onPress={() => navigation.navigate('Details', { param: item })}>
                    <Text style={cardStyle.btnText} >Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card