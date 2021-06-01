import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'

import { Octicons, MaterialIcons, AntDesign, Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

const ListSalons = [
    {
        id: 1,
        icon: '',
        title: 'Nom du salon numero 1',
        description: 'Nouvelle description des offres du salon',
    },
    {
        id: 2,
        icon: '',
        title: 'Nom du salon numero 2',
        description: 'Nouvelle description des offres du salon',
    },
    {
        id: 3,
        icon: '',
        title: 'Nom du salon numero 3',
        description: 'Nouvelle description des offres du salon',
    },
    {
        id: 4,
        icon: '',
        title: 'Nom du salon numero 4',
        description: 'Nouvelle description des offres du salon',
    },
    {
        id: 5,
        icon: '',
        title: 'Nom du salon numero 5',
        description: 'Nouvelle description des offres du salon',
    },
]


export default class ResearchList extends React.Component {
    constructor(props) {
        super(props)
    }


    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailSalon')} >
                <View style={{ flexDirection: 'column', marginBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 2, backgroundColor: 'white', opacity: 0.65, justifyContent: 'center', paddingLeft: 5, paddingRight: 5, blurRadius: 2 }}>
                        <View style={{ height: 80, width: 80, backgroundColor: 'black', opacity: 0.1 }}>
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
                            <Text style={styles.txtIndicator}>30</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <EvilIcons name="comment" size={15} color="white" />
                            <Text style={styles.txtIndicator}>30</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="refresh" size={15} color="white" style={{ fontWeight: 'bold' }} />
                            <Text style={styles.txtIndicator}>30</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="tags" size={15} color="white" />
                            <Text style={styles.txtIndicator}>30</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={ListSalons}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
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
    txtIndicator:{
        fontSize: 10,
        color: 'white'
    }

})
