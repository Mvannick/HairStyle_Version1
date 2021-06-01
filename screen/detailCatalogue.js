import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity, Image, View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { Octicons, AntDesign, FontAwesome, EvilIcons, Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader'

import { FlatList } from 'react-native';

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height
const ListSalons = [
    {
        id: 1,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
    {
        id: 2,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
    {
        id: 3,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
    {
        id: 3,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
]

const List = [
    {
        id: 1,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
    {
        id: 2,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
    {
        id: 3,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
    {
        id: 3,
        icon: '',
        title: 'Categorie',
        description: 'Nouvelle description du catalogue avec precision ...',

    },
]


const detailCatalogue = ({ navigation }) => {
    function renderItem({ item }) {
        return (

            <TouchableOpacity onPress={() => { }} >
                <View style={{ flexDirection: 'column', marginBottom: 5, marginTop: 10, height: 200, width: 200, borderRadius: 5, opacity: 0.8, blurRadius: 2, backgroundColor: '#b8926c', marginRight: 20, alignItems: 'flex-start' }}>
                    <View style={{ position: 'absolute', flexDirection: 'column', top: 100, height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style>
                                <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'left', textTransform: 'uppercase', marginLeft: 10 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ fontSize: 12, color: '#fff', textAlign: 'justify', flex: 0.8 }}>
                                    {item.description}
                                </Text>
                            </View>

                            <View>
                                <EvilIcons name="plus" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bd1.jpg')} resizeMode='cover' blurRadius={15} style={styles.image}>
                <View style={styles.content}>
                    <CustomHeader screen='detailCatalogue' navigation={navigation} />

                    <Text style={{ textAlign: 'center', fontSize: 17, color: 'white', alignSelf: 'center', fontStyle: 'italic' }}>
                        Decription du catalogue  du salon de coiffure ....
                    </Text>

                    <View style={{ paddingRight: 15, paddingLeft: 10, flex: 1, margin: 5 }}>
                        <FlatList
                            horizontal
                            data={ListSalons}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    Text: {

        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 22,
        color: 'white',
        borderWidth: 1

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.80,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        marginBottom: 150,
        paddingTop: 10

    },
    flat: {



    }

});


export default detailCatalogue