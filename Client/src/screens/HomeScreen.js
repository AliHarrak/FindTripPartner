import React, {useContext} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {AuthContext} from './../context/AuthContext';


const HomeScreen = ( {navigation} ) =>{
    const {userInfo, getPosts, profile , getProfile , creatProfile, getTrajetsByID } = useContext(AuthContext);
    const callPosts = () => {
        creatProfile(userInfo.data.id,userInfo.data.id)
        getProfile(userInfo.data.id);
        getPosts();
        getTrajetsByID(profile.id);
        navigation.navigate('Profile');
    }
    return(
        <View style={styles.container}>
           <Text>Welecome {userInfo.data.fname}</Text>
           <Button onPress={callPosts} title="Go profile" color="green"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignContent:'center',
    },
})

export default HomeScreen;