import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Platform, Text, View, ImageBackground, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';

import { Octicons, MaterialIcons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/bd1.jpg')} resizeMode='cover' style={styles.image} blurRadius={0}>
                    <View style={styles.content}>
                        <CustomHeader screen='Search' navigation={this.props.navigation} />
                        <View style={styles.bottomElement}>
                            <Text style={styles.text}>Hair Style</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 125,
        paddingTop: 10

    },
    topElement: {
        flexDirection: 'row',
        height: 30,
        paddingLeft: 10,
        alignItems: 'center'
    },
    bottomElement: {
        flexDirection: 'row',
        height: 50,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.90,
    },
    search: {
        flex: 0.90,
        backgroundColor: 'white',
        opacity: 0.65,
        height: 30,
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        color: 'black',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: 'center',
        opacity: 0.95,
        fontStyle: 'italic',
    }
});

export default Search