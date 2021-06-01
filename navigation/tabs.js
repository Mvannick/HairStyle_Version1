import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Search, Home, Contact, Rendezvous } from '../screen/index'

import { Octicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { ImageBackground, Image } from 'react-native';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

class MyTabBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={{ position: 'absolute', bottom: 0, top: 10, backgroundColor: '#b8926c', }}>
                </View>
                <BottomTabBar {...this.props.props} />
            </View>
        )
    }
}

const tab = ({ navigation }) => {
    const userIsSlon = false
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    elevation: 0,
                    opacity: 0.5,
                    borderTopWidth: 0,
                    backfaceVisibility: 'visible',
                    backgroundColor: '#b8926c',
                }
            }}
            tabBar={(props) => (<MyTabBar props={props} />)}
        >
            <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({ focused }) => (<Octicons name="search" size={focused ? 25 : 20} color={focused ? "white" : "black"} />) }} />
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => (<AntDesign name="bars" size={focused ? 25 : 20} color={focused ? "white" : "black"} />) }} /> 
            <Tab.Screen name="Contact" component={Contact} options={{ tabBarIcon: ({ focused }) => (<AntDesign name="contacts" size={focused ? 25 : 20} color={focused ? "white" : "black"} />) }} />
            <Tab.Screen name="Rendezvous" component={Rendezvous} options={{ tabBarIcon: ({ focused }) => (<FontAwesome name="calendar" size={focused ? 25 : 20} color={focused ? "white" : "black"} />) }} />
        </Tab.Navigator>
    )
}

const Styles = StyleSheet.create({

    tab: {

    }



});

export default tab