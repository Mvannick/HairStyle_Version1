

import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native'

import { Octicons, MaterialIcons } from '@expo/vector-icons';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };


    render() {
        const { search } = this.state;

        return (
            <View style={{}}>
                <SearchBar
                    containerStyle={{ width: 260, backgroundColor: 'transparent',borderColor: 'transparent', height: 30, borderRadius: 20, borderWidth: 0, margin: 0, position: 'relative', top: 0}}
                    inputContainerStyle={{height: 20, margin: 0,backgroundColor: 'white',  position: 'relative', top: -8, borderRadius: 20}}
                    placeholder="Type Here..."
                    showLoading={true}
                    underlineColorAndroid='transparent'
                    lightTheme={true}
                    placeholderTextColor='#86939e'
                    cancelIcon={<MaterialIcons name="cancel" size={24} color="black" />}
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        )
    }
}