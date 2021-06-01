import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import CustomHeader from '../components/CustomHeader'
import {SearchBar} from 'react-native-elements';
import { Octicons, AntDesign, FontAwesome,EvilIcons, Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height



const ListSalons = [
    {
        id: 1,
        icon: '',
        title: 'Nom du salon numero 1',
        description: 'Nouvelle description des offres du salon',
        nc: 2, 
        nj: 30,
        np: 45,
        nr: 50
    },
    {
        id: 2,
        icon: '',
        title: 'Nom du salon numero 2',
        description: 'Nouvelle description des offres du salon',
        nc: 20, 
        nj: 50,
        np: 15,
        nr: 50
    },
    {
        id: 3,
        icon: '',
        title: 'Nom du salon numero 3',
        description: 'Nouvelle description des offres du salon',
        nc: 65, 
        nj: 50,
        np: 43,
        nr: 59
    },
    {
        id: 3,
        icon: '',
        title: 'Nom du salon numero 3',
        description: 'Nouvelle description des offres du salon',
        nc: 65, 
        nj: 50,
        np: 43,
        nr: 59
    },
]


const Home = ({ navigation }) => {
    function renderItem ({ item })  {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('detailCatalogue') }} >
                <View style={{ flexDirection: 'column', marginBottom: 15,  }}>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 2,paddingTop: 10,paddingBottom: 10, backgroundColor: 'white', opacity: 0.65, justifyContent: 'center', paddingLeft: 5, paddingRight: 5, blurRadius: 2 , borderRadius: 3}}>
                        <View style={{ height: 60, width: 60, backgroundColor: '#b8926c', opacity: 0.5, borderRadius: 60 }}>
                        </View>

                        <View style={{ flexDirection: 'column', flex: 1, marginLeft: 5, justifyContent: 'space-between' }}>
                            <Text style={{ marginBottom: 3, fontWeight: 'bold', }}>
                                {item.title}
                            </Text>
                            <Text style={{ flex: 1 }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="hearto" size={15} color="white" />
                            <Text style={styles.txtIndicator}>{item.nc}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <EvilIcons name="comment" size={15} color="white" />
                            <Text style={styles.txtIndicator}>{item.nj}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="refresh" size={15} color="white" style={{ fontWeight: 'bold' }} />
                            <Text style={styles.txtIndicator}>{item.np}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="tags" size={15} color="white" />
                            <Text style={styles.txtIndicator}>{item.nr}</Text>
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
                    <CustomHeader screen='Search' navigation={navigation} />
                   
                    <View style={{ flexDirection: 'row', opacity: 0.5, justifyContent: 'flex-end', paddingRight: 10 }}>
                        <View style={{ backgroundColor: '#e5e5e5', flex: 0.3, flexDirection: 'row', padding: 1, borderRadius: 30, alignItems: 'center', alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                            <AntDesign name="plus" size={15} color="#fff" />
                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>nouveau</Text>
                        </View>
                    </View>

                    <View style={{paddingRight: 15, paddingLeft: 15, marginTop: 50}}>
                        <FlatList
                            data={ListSalons}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 100,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 125,
        paddingTop: 10

    },
    topElement: {
        flexDirection: 'row',
        height: 30,
        paddingLeft: 10,
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.90,
    },
    text: {

        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: 'center',
        opacity: 0.6,
        fontStyle: 'italic',
    },
    txtIndicator: {
        fontSize: 10,
        color: 'white'
    }
});

export default Home 

