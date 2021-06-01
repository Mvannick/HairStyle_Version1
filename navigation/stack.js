import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator } from '@react-navigation/drawer';

import Accueil from '../screen/accueil'
import Tab from './tabs';
import Drawer from './draw'

import ResultSearch from '../screen/ResultSearch'
import DetailSalon from '../screen/DetailSalon'
import detailCatalogue from '../screen/detailCatalogue'

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"welcome"}   headerMode='none' >
                <Stack.Screen name="welcome" component={Accueil} />
                <Stack.Screen name="Tabs" component={Tab} />
                <Stack.Screen name="Drawer" component={Drawer} />
                <Stack.Screen name="resultSearch" component={ResultSearch} />
                <Stack.Screen name="DetailSalon" component={DetailSalon} />
                <Stack.Screen name="detailCatalogue" component={detailCatalogue} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}