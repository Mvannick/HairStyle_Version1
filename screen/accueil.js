import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, TouchableOpacity } from 'react-native';


class Accueil extends React.Component {

    constructor(props) {
        super(props)
    }

   
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Drawer')
        }, 3000);
    }

    render() {

        return (
            <View>  
                <StatusBar style="auto" />
                <View style={styles.container}>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Drawer')} >
                            <View style={styles.title}>
                                <Text style={styles.accueil}>Hair Style</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    content: {
        backgroundColor: "#b8926c",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    title: {
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 30,
        opacity: 0.3,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    accueil: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black'
    }
});

export default Accueil