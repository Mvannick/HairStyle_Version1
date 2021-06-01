import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'

import { Octicons, MaterialIcons, AntDesign, Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import ListCategories from '../components/ListCategories';

import { Search, Home, Contact, Rendezvous } from '../screen/index'
import ResearchList from '../components/ResearchList'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

class ResultSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    gotoBackScreen = () =>
    {
        this.props.navigation.goBack()
    }

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/bd1.jpg')} style={styles.image} resizeMode='cover' style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} blurRadius={5}>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', paddingLeft: windowsWidth * 0.04, paddingRight: windowsWidth * 0.04, alignItems: 'center', paddingTop: 10 }}>
                            <MaterialIcons name="menu" size={30} color="white" />

                            <TouchableOpacity onPress={this.gotoBackScreen } style={{ marginLeft: 10, marginRight: 10 }}>
                                <AntDesign name="arrowleft" size={25} color="white"  />
                            </TouchableOpacity>

                            <View style={{
                                flex: 0.98,
                                backgroundColor: 'white',
                                opacity: 0.65,
                                height: 30,
                                borderRadius: 25,
                                flexDirection: 'row',
                                paddingLeft: 5,
                                paddingRight: 5,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <TextInput placeholder='Rechercher ...' onPress={() => { }} style={{ textAlign: 'center', flex: 1, fontWeight: 'bold', fontSize: 15 }} />
                                <Octicons onPress={() => { this.props.navigation.navigate("resultSearch") }} name='search' size={18} style={{ marginTop: 1, alignItems: 'flex-end' }} />
                            </View>
                        </View>

                        <View style={{ height: windowsHeight * 0.15, paddingTop: '5%' }}>
                            <ListCategories />
                        </View>

                        <View style={{ flex: 1, paddingRight: 20, paddingLeft: 20 }}>
                            <ResearchList />
                        </View>
                    </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.90
    },

})

export default ResultSearch