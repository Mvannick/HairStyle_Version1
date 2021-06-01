import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader'


const Contact = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bd1.jpg')} style={styles.image}>
            <View style={styles.content}>
            <CustomHeader screen='Contact' navigation={navigation} style={styles.custom} />


            <Text style={{ fontWeight: 'bold',textAlign:'center',color:'black',border:'solid',borderWidth:5, padding:10 }}>
                 Téléphone : 659 87 56 25 
                 E-MAIL: HairStyle @ gmail.com 
                 Localisation: Ngaoundéré, Cameroun.
            </Text>
                <Text style={styles.text}>
                    Hair Style


                </Text>
                </View>
            </ImageBackground>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        opacity: 0.8,
        justifyContent: 'center'
       
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        
        marginBottom:50,
        paddingTop: 10

    },
    custom:{
        
    },
    text: {
       
        color: 'white',
        textAlign: 'center',
        fontSize: 42,
        opacity: 0.8,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 250
    }
});

export default Contact