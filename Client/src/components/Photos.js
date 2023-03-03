import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';


const Photos = ({ image }) => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: `http://10.0.2.2:5000/uploads/${image}` }} style={{ height: 300, width: 380, marginTop: 10 }} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
    ,
    content: {
        width: 395,
        height: 320,
        alignItems: "center",

        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 7, height: 7 },
        elevation: 10,
        shadowOpacity: 10,
    }
})


export default Photos;