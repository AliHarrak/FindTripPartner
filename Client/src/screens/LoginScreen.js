import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from './../context/AuthContext';


const image = require("../assets/imagesPfa/TRIP_LOGO.png");
const bgImg = require('../assets/imagesPfa/bgLogin.jpg');

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login } = useContext(AuthContext);



    return (
        <View style={styles.container}>
            <ImageBackground source={bgImg} style={styles.bg} blurRadius={2} >
                <View style={styles.cntnt}>
                    <Image style={styles.image} source={image} />
                    <Text style={styles.txt}>Log in</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={email}
                            placeholder="Email"
                            placeholderTextColor="white"
                            keyboardType='email-address'
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={password}
                            placeholder="Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => {{ login(email, password)} }}>
                        <Text style={styles.loginText}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.recoveryZone} >
                        <Text style={{ color: "white" }}>Forget <Text style={{ fontWeight: "bold" }}>password?  </Text></Text>
                        <TouchableOpacity ><Text style={styles.recoveryBtn}>Remember</Text></TouchableOpacity>
                    </View>
                    <View style={styles.registerZone} >
                        <Text style={{ fontWeight: "bold", color: "white" }}>D'ont have an account?  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Singup')}><Text style={styles.registerBtn}>Register</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
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
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 75,
    },
    image: {
        width: 120,
        height: 100,
        marginBottom: 25,
    },
    txt: {
        fontFamily: 'normal',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    inputView: {
        backgroundColor: "#1C1C1E",
        opacity: 0.75,
        width: 350,
        height: 45,
        marginTop: 10,
        borderRadius: 10
    },
    TextInput: {
        color: "white",
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: 350,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#F2BB16",
    },
    loginText: {
        color: "white",
        fontSize: 15,
    },
    recoveryZone: {
        paddingRight: 155,
        marginTop: 60,
        flexDirection: 'row',
    },
    recoveryBtn: {
        color: "#F2BB16",
        textDecorationLine: 'underline',
        fontWeight: "bold",
    },
    registerZone: {
        paddingRight: 136,
        marginTop: 10,
        flexDirection: 'row'
    },
    registerBtn: {
        color: "#F2BB16",
        textDecorationLine: 'underline',
        fontWeight: "bold",
    },
});
export default LoginScreen;
