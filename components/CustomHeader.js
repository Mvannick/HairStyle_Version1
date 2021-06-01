import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Platform, Text, View, ImageBackground, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default class CustomHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.topElement}>
                {this.props.screen !== "detailCatalogue" ? <MaterialIcons name="menu" size={30} color="white" style={{ marginRight: 20, }} onPress={() => this.props.navigation.openDrawer()} /> : <View></View>}
                
                {this.props.screen === "Contact" ? <MaterialIcons name="arrow-back" size={30} color="white" style={{ marginRight: 20, }} onPress={() => this.props.navigation.goBack()} /> : <View></View>}
                {this.props.screen === "detailCatalogue" ? <MaterialIcons name="arrow-back" size={30} color="white" style={{ marginRight: 20, }} onPress={() => this.props.navigation.goBack()} /> : <View></View>}
            </View>
        )
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
        alignItems: 'center',
    },
});
