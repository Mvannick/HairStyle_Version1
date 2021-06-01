import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home'
import Contact from './contact'

import Rendezvous from './rendezvous'
import Search from './Search'

const Tab = createBottomTabNavigator();

const Menu = ({ navigation }) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeBackgroundColor: '#c4461c',
                inactiveBackgroundColor: '#b55031',
                borderTopWidth: 0,
                elevation: 0,
                style:{borderTopWidth: 0}
            }}
        >
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({ focused }) => (<Octicons name="search" size={24} color={focused ? "white" : "black" } />)}}/>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => (<AntDesign name="bars" size={24} color={focused ? "white" : "black" }  />)}} />
            <Tab.Screen name="Contact" component={Contact} options={{tabBarIcon: ({ focused }) => (<AntDesign name="contacts" size={24} color={focused ? "white" : "black" }  />)}} />
            <Tab.Screen name="Rendezvous" component={Rendezvous} options={{ tabBarIcon: ({ focused }) => (<FontAwesome name="calendar" size={24} color={focused ? "white" : "black" }  />)}} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    Contact: {
        borderWidth: 1,
        borderColor: 1,
    }
});

export default Menu