import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Tragets from '../components/Tragets';

import { AuthContext } from './../context/AuthContext';
import { useContext, useState } from 'react';

const MytragetsScreen = ({ navigation }) => {
    const { userInfo, profile, trajets } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={styles.cntn}>
                <TouchableOpacity style={styles.Icon1} onPress={() => { navigation.navigate("Profile") }}>
                    <FontAwesome5 name='chevron-left' size={40} color="black" />
                </TouchableOpacity>
                <Text style={styles.txtH}>List Of Destinations</Text>
                <TouchableOpacity style={styles.Icon2} onPress={()=>{navigation.navigate("AddTrajets")}}>
                    <Image source={require('../assets/imagesPfa/plus.png')} style={styles.Icon2} />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <ScrollView style={{ height: 700, marginVertical: 15 }} showsVerticalScrollIndicator={false}>
                {
                    trajets.reverse().map((item) => {
                        return (
                            <Tragets key={item.id} 
                                Pname={item.profileName} 
                                Pimage={item.profileImage} 
                                villeDep={item.villeDep}
                                villeArr={item.villeArr}
                                dateDep={item.dateDep}
                                dateArr={item.dateArr}
                                nbrPers = {item.nbrPers}
                                sexe={item.sexe}
                                age={item.age}
                                type={item.type}
                                Pid={item.idProfile}
                                id={item.id}
                            />
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cntn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        width: "100%",
        backgroundColor: "#F2BB16",
    },
    Icon2: {
        marginLeft: 43,
        marginTop: 3
    },
    Icon1: {
        marginRight: 62,
        marginTop: 5
    },
    txtH: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    line: {
        borderBottomWidth: 2,
        borderColor: "black",
        width: "100%",

    },

});

export default MytragetsScreen;