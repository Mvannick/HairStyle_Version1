import React from 'react'
import { FlatList, Dimensions, View, TouchableOpacity, Image } from 'react-native'


const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

const DATA = [
    {
        id: 1,
        icon: require('../assets/images/Categories/cat1.png'),
        title: 'Categorie 1',
    }, {
        id: 3,
        icon: require('../assets/images/Categories/cat3.png'),
        title: 'Categorie 3',
    }, {
        id: 4,
        icon: require('../assets/images/Categories/cat4.png'),
        title: 'Categorie 4',
    }, {
        id: 5,
        icon: require('../assets/images/Categories/cat5.png'),
        title: 'Categorie 5',
    }, {
        id: 7,
        icon: require('../assets/images/Categories/cat7.png'),
        title: 'Categorie 7',
    }, {
        id: 9,
        icon: require('../assets/images/Categories/cat9.png'),
        title: 'Categorie 9',
    }, {
        id: 10,
        icon: require('../assets/images/Categories/cat10.png'),
        title: 'Categorie 10',
    }
]


class ListCategories extends React.Component {
    constructor(props) {
        super(props)
    }


    renderItem = ({ item }) => {
        return (
            <View style={{ borderRadius: 25, height: 50, width: 50, backgroundColor: 'white', marginRight: 15 }}>
                <TouchableOpacity onPress={() => { }} >
                    <Image source={item.icon} style={{ borderRadius: 50, height: 50, width: 50, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        return (
            <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                contentContainerStyle={{
                    paddingHorizontal: windowsWidth * 0.03,
                    paddingBottom: 10
                }}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}

export default ListCategories