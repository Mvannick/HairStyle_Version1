import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View, Dimensions } from 'react-native';
import Tabs from './tabs'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

class Feed extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Home Screen
                </Text>
            </View>
        )
    }
}

class Search extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              
            </View>
        )
    }
}

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            initialRouteName='Dashboard'
            drawerStyle={{
                backgroundColor: '#b8926c',
                width: windowWidth * 0.6
            }}
        >
            <Drawer.Screen name="Dashboard" component={Tabs} />
            <Drawer.Screen name="Search" component={Search} />
        </Drawer.Navigator>
    );
}