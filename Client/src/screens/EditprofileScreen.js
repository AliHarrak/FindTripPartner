import React, {useState,useContext} from 'react';
import {View , Text , TextInput , TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { IMAGE_URL } from '../Config';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const EditprofileScreen = ({navigation}) => {
    const { getProfile, updateProfile , userInfo,profile } = useContext(AuthContext);
    const [description , setDescription] = useState();
    const [tel , setTel] = useState();
    const [age , setAge] = useState();
    const [pays , setPays] = useState();
    const [ville , setVille] = useState();
    const [profileImage, setProfileImage] = useState("../assets/imagesPfa/bgProfile3.png");
    const [imagePro, setImagePro] = useState(`${profile.image}`);
    const [img , setImg] = useState()
    let imageUrl = '';

    const selectGalery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(res => {
            setProfileImage(res.path);
            imageUpload(res.path)
        });
    }

    const imageUpload = (imagePath) => {
        const imageData = new FormData()
        imageData.append("image", {
            uri: imagePath,
            name: 'image.png',
            fileName: 'image',
            type: 'image/png',
        })
        console.log("form data", imageData)
        axios({
            method: 'post',
            url: IMAGE_URL,
            data: imageData,
            headers: { "Accept": "application/json, text/plain, /", "Content-Type": "multipart/form-data" }
        })
            .then(function (response) {
                console.log(response.data)
                imageUrl = { "path": `${response.data.url}` }
                console.log(imageUrl);
                setImagePro(`${imageUrl.path}`);
                console.log(imagePro);
            }).catch((error) => {
                console.log("error riased", error)
            })
    }

    
    const updatProfile = () => {
       updateProfile(description,`${imagePro}`,tel,pays,ville,age,userInfo.data.id);
       getProfile(userInfo.data.id);
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={()=> {navigation.navigate('Myprofile')}}>
                            <Image source={require('../assets/imagesPfa/back.png')} />
        </TouchableOpacity>
        <Image style={styles.profilePic} source={{ uri: profileImage }}  />
        <TouchableOpacity onPress={selectGalery} style={[styles.loginBtn, {marginBottom:45}]}>
            <Text style={styles.loginText} >Chose From Galery</Text>
        </TouchableOpacity>
        <View style={styles.inputView}>
        <TextInput 
                            style={styles.TextInput}
                            value={description}
                            placeholder=" Profile Description "
                            placeholderTextColor="white"
                            onChangeText={(text=>{setDescription(text)})}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput 
                            style={styles.TextInput}
                            value={tel}
                            placeholder=" Phone : 0666666666 "
                            placeholderTextColor="white"
                            onChangeText={(text=>{setTel(text)})}
        /> 
        </View>
        <View style={styles.inputView}>
        <TextInput 
                            style={styles.TextInput}
                            value={pays}
                            placeholder=" Country "
                            placeholderTextColor="white"
                            onChangeText={(text=>{setPays(text)})}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput 
                            style={styles.TextInput}
                            value={ville}
                            placeholder=" City "
                            placeholderTextColor="white"
                            onChangeText={(text=>{setVille(text)})}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput 
                            style={styles.TextInput}
                            value={age}
                            placeholder=" Your Age "
                            placeholderTextColor="white"
                            onChangeText={(text=>{setAge(text)})}
        />
        </View>
        <TouchableOpacity onPress={updatProfile} style={[styles.loginBtn, {marginTop:40}]}>
            <Text style={styles.loginText} >Save Changes</Text>
        </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center"
    },
    profilePic: {
        height: "20%",
        width: 145,
        borderWidth: 5,
        borderColor: "white",
        borderRadius: 150,
        backgroundColor:"#F2F2F2",
        marginTop:10,
    },
    loginBtn: {
        width: 150,
        borderRadius: 20,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "white",
        elevation: 9,
    },
    loginText: {
        color: "#F2BB16",
        fontSize: 15,
        fontWeight:"bold"
    },
    inputView:{
        backgroundColor: "#1C1C1E",
        opacity: 0.75,
        width: 330,
        height: 45,
        marginTop: 10,
        borderRadius: 10
    },
    TextInput :{
        color: "white",
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    back: {
        marginRight: 340,
        marginBottom:25
    },

})

export default EditprofileScreen;