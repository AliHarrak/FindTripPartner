import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal, ScrollView } from 'react-native';
import { useState, useContext } from "react";
import { AuthContext } from './../context/AuthContext';
import { text } from '../Config';

const bgImage = require('../assets/imagesPfa/bgSingUp.jpeg');

const SingupScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const {singup } = useContext(AuthContext);

    const handleRegister = () => {
        if (email!=null && firstName!=null && lastName!=null && password!=null && confirmPassword!=null)
        {
            if(confirmPassword === password){
                singup(firstName, lastName, email, password);
                 
            }else{
                alert("Password And Password Confirmation Are Not The Same");
            }
        } 
        else {
            alert("All Inputs Are Required!!!");
        } 
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={bgImage} resizeMode="cover" style={styles.bg} blurRadius={1} >
                <View style={styles.cntnt}>
                    <Text style={styles.txt}>Sign Up</Text>
                    <View style={styles.zonename}>
                        <TextInput style={styles.name}
                            placeholder="First Name"
                            placeholderTextColor='white'
                            onChangeText={(firstName) => setFirstName(firstName)}
                        />
                        <TextInput style={styles.name}
                            placeholder="Last Name"
                            placeholderTextColor='white'
                            onChangeText={(lastName) => setLastName(lastName)}
                        />
                    </View>
                    <TextInput style={styles.inputtext}
                        placeholder="Email"
                        placeholderTextColor='white'
                        keyboardType='email-address'
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput style={styles.inputtext}
                        placeholder="Password"
                        placeholderTextColor='white'
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                    />
                    <TextInput style={styles.inputtext}
                        placeholder="Confirm Password"
                        placeholderTextColor='white'
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.registerZone} >
                        <Text style={{ fontWeight: "bold", color: "white" }}>Already have an account?  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.registerBtn}>Log in</Text></TouchableOpacity>
                    </View>
                    {/* <View style={styles.TermZone} >
                        <TouchableOpacity onPress={() => setShowModal(true)}><Text style={styles.TermBtn}>Read Terms and Policy</Text></TouchableOpacity>
                    </View> */}
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 75,
    },

    txt: {
        textAlign: "center",
        fontFamily: 'normal',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        color:"black"
    },
    name: {
        width: 169,
        height: 44,
        backgroundColor: '#1C1C1E',
        padding: 16,
        margin: 4,
        color: '#ffffff',
        borderRadius: 8,
        opacity: 0.75,
        fontSize: 11,
        fontWeight: 'bold'
    },
    zonename: {
        flexDirection: 'row'
    },
    inputtext: {
        width: 343,
        height: 44,
        backgroundColor: '#1C1C1E',
        padding: 16,
        margin: 4,
        color: '#ffffff',
        borderRadius: 8,
        opacity: 0.75,
        fontSize: 11,
        fontWeight: 'bold'

    },

    loginBtn: {
        width: 343,
        borderRadius: 8,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#F2BB16",
    },

    loginText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold'
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
    TermZone:{
        marginTop: 20,

    },
    TermBtn:{
        color: "white",
        textDecorationLine: 'underline',
        fontWeight: "bold",
        fontSize:16
    },
    modalContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    },
    modalCntn:{

    },
});

export default SingupScreen;

// import React from 'react-native';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
// import { useState , useContext} from "react";
// import { AuthContext } from './../context/AuthContext';
// import { withNavigation } from 'react-navigation';




// const bgImage = require('../assets/imagesPfa/bgSingUp.jpeg');

// const  SignupScreen = ({navigation}) => {
//     const [email, setEmail] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     return (

//         <View style={styles.container}>
//             <ImageBackground source={bgImage} resizeMode="cover" style={styles.bg} >
//                 <View style={styles.cntnt}>
//                     <Text style={styles.txt}>Sign Up</Text>
//                     <View style={styles.zonename}>
//                         <TextInput style={styles.name}
//                             placeholder="First Name"
//                             placeholderTextColor='white'
//                             onChangeText={(firstName) => setFirstName(firstName)}
//                         />
//                         <TextInput style={styles.name}
//                             placeholder="Last Name"
//                             placeholderTextColor='white'
//                             onChangeText={(lastName) => setLastName(lastName)}
//                         />
//                     </View>

//                     <TextInput style={styles.inputtext}
//                         placeholder="Email"
//                         placeholderTextColor='white'
//                         onChangeText={(email) => setEmail(email)}
//                     />
//                     <TextInput style={styles.inputtext}
//                         placeholder="Password"
//                         placeholderTextColor='white'
//                         onChangeText={(password) => setPassword(password)}
//                         secureTextEntry={true}

//                     />
//                     <TextInput style={styles.inputtext}
//                         placeholder="Confirm Password"
//                         placeholderTextColor='white'
//                         onChangeText={(confirmPassword) => setPassword(confirmPassword)}
//                         secureTextEntry={true}

//                     />

//                     <TouchableOpacity style={styles.loginBtn} >
//                         <Text style={styles.loginText}>Sign Up</Text>
//                     </TouchableOpacity>

//                 </View>
//             </ImageBackground>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     bg: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         width: 450,
//         height: "100%"
//     },
//     cntnt: {
//         flex: 1,
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         marginBottom: 75,
//     },

//     txt: {
//         fontFamily: 'normal',
//         Color: '#1C1C1E',
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 40,
//     },
//     name: {
//         width: 169,
//         height: 44,
//         backgroundColor: '#1C1C1E',
//         padding: 16,
//         margin: 4,
//         color: 'white',
//         borderRadius: 8,
//         opacity: 0.75,
//         fontSize: 11,
//         fontWeight: '105'

//     },
//     zonename: {
//         flexDirection: 'row'
//     },
//     inputtext: {
//         width: 343,
//         height: 44,
//         backgroundColor: '#1C1C1E',
//         padding: 16,
//         margin: 4,
//         color: 'white',
//         borderRadius: 8,
//         opacity: 0.75,
//         fontSize: 11,
//         fontWeight: '105'

//     },

//     loginBtn: {
//         width: 343,
//         borderRadius: 8,
//         height: 44,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 30,
//         backgroundColor: "#F2BB16",
//     },

//     loginText: {
//         color: "white",
//         fontSize: 11,
//     },

// });
// export default SignupScreen;