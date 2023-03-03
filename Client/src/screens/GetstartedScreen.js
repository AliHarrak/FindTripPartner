import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,Image } from 'react-native';

const bgImage = require('../assets/imagesPfa/getStarted.jpg');
const image = require("../assets/imagesPfa/TRIP_LOGO.png");


const GetstartedScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.bg} >
              <View style={styles.cntnt}>
              <Image style={styles.image} source={image} />
                <Text style={styles.txt}>Find Your Perfect</Text>
                <Text style={styles.txt}>Trip Partner</Text>
                <View style={{backgroundColor:"white",height:5.16,width:104.13,borderRadius:30,marginTop:30,marginLeft:30}}></View>
                <Text style={styles.txt2}>Join Us, And Find The Best Trip Offers!!!</Text>
                <Text style={styles.txt3}>Le Lorem Ipsum est simplement du 
                faux texte employé dans la composition et la mise en page 
                avant impression. Le Lorem Ipsum est le faux texte standard de 
                l'imprimerie depuis les années 1500.</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}><Text style={styles.registerBtn}>Get Started</Text></TouchableOpacity>
              </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    cntnt: {
        flex: 1,
        justifyContent:"center",
    },
    image: {
        width: 148,
        height: 117,
        marginBottom: 80,
        alignSelf:"center"
    },
    txt:{
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        width:300,
        marginLeft:30
    },
    txt2:{
        color:"white",
        fontSize:19,
        fontWeight:"bold",
        marginLeft:30,
        marginTop:110,
        width:300,
    },
    txt3:{
        color:"white",
        fontSize:14,
        fontWeight:"bold",
        marginTop:20,
        marginLeft:30

    },
    btn:{
        backgroundColor:"#F2BB16",
        width:166.95,
        height:47.46,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginTop:50,
        marginLeft:30,
        marginBottom:30
    },
    registerBtn: {
        color: "white",
        fontWeight: "bold",
    },

});



export default GetstartedScreen;