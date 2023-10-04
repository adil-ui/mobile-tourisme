
import { StyleSheet } from 'react-native'


const cardStyle = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 7,
        marginBottom: 20,
    },
    ImageContainer: {
        width: '35%',
    },
    cardText: {
        width: '65%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        position: 'relative',

    },
    cardTitle: {
        fontSize: 14.5,
        fontWeight: '600',
        marginBottom: 3

    },
    cardStar: {
        fontSize: 14.5,
        color: '#f6cb01',
        fontWeight: '600',
    },
    cardPrice: {
        fontSize: 13.5,
        color: '#17550c',
        fontWeight: '700',
        marginTop: 3,
    },
    cardTextContainer: {
        marginBottom: 8,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7
    },
    btnAdd: {
        width: 110,
        backgroundColor: '#a92220',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        padding: 7,
        elevation: 3,
        position: 'absolute',
        bottom: 8,
        end: 8,

    },
    btnText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14.5,
    },
    geo: {
        position: 'absolute',
        bottom: 13,
        start: 8,
        verticalAlign: 'middle',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '400',
        fontSize: 15,

    }




})
export default cardStyle;