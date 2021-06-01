import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

const RendezVous = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bd1.jpg')} style={styles.image}>
                <Text style={styles.text}>
                    Hair Style
                </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        opacity: 0.8
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 42,
        opacity: 0.6,
        fontStyle: 'italic'
    }
});

export default RendezVous