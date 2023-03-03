import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Image, Modal } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from './../context/AuthContext';
import { useContext, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { IMAGE_URL } from '../Config';
import axios from 'axios';


const bg = require('../assets/imagesPfa/pawel-czerwinski-vI5XwPbGvmY-unsplash.jpg');

const ProfileScreen = ({ navigation }) => {

    const { userInfo, logout, sendPost, profile ,getProfile,getTrajetsByID } = useContext(AuthContext);
    const [postModal, setPostModal] = useState(false);
    const [postImage, setPostImage] = useState("../assets/imagesPfa/bgProfile3.png");
    const [postDesc, setPostDesc] = useState('');
    const [imageP, setImageP] = useState('');
    let imageUrl = '';


    const handleShowPostModal = () => {
        setPostModal(true);
    }
    const handleHidePostModal = () => {
        setPostModal(false);
    }

    const callPosts = () => {
        navigation.navigate("Home");
    }

    const selectGalery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(res => {
            setPostImage(res.path);
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
                setImageP(`${imageUrl.path}`);
                console.log(imageP)

            }).catch((error) => {
                console.log("error riased", error)
            })
    }
    const sendNewPost = () => {
        sendPost(userInfo.data.id, postDesc, `${imageP}`);
        setPostModal(false);
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg} >
                <View style={styles.content} elevation={5} >


                    <Modal visible={postModal} animationType="slide">
                        <View style={styles.postModalContainer}>
                            <TouchableOpacity style={{ maxHeight: 64, width: "20%", marginBottom:10}} onPress={handleHidePostModal}>
                                <View style={{ backgroundColor: "#F2BB16", borderRadius: 10, alignItems: "center", justifyContent: "center",  }}><FontAwesome5 name='times-circle' size={35} color="white" /></View>
                            </TouchableOpacity>
                            <View style={styles.imgplace}><Image source={{ uri: postImage }} style={styles.img} /></View>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={selectGalery} style={{ backgroundColor: "#F2BB16", borderRadius: 10, height: 44, width: "50%", alignItems: "center", justifyContent: "center", marginBottom: 120 }}>
                                    <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }} >Chose From Galery</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputView2}>
                                <TextInput
                                    multiline
                                    style={styles.TextInput2}
                                    value={postDesc}
                                    placeholder="Descripe your experience"
                                    onChangeText={(text) => setPostDesc(text)}
                                />
                            </View>
                            <TouchableOpacity onPress={sendNewPost} style={{ backgroundColor: "#F2BB16", borderRadius: 10, height: 44, width: "20%", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }} >Save</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>


                    <View style={styles.Header}>
                        <TouchableOpacity style={styles.back} onPress={callPosts}>
                            <Image source={require('../assets/imagesPfa/back.png')} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>Account</Text>
                        <TouchableOpacity style={styles.msg}>
                            <Image source={require('../assets/imagesPfa/Message.png')} />
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.img} source={ {uri: `http://10.0.2.2:5000/uploads/${profile.image}`}} />
                    <Text style={styles.profileName}>{userInfo.data.fname}</Text>
                    <TouchableOpacity style={styles.menu} onPress={() => { {navigation.navigate("Myprofile"); getProfile(userInfo.data.id)} }}>
                        <Image source={require('../assets/imagesPfa/profile.png')} style={styles.menuIcon} />
                        <Text style={{ color: "black", fontSize: 18, marginRight: 70 }}>View profile</Text>
                        <FontAwesome5 name='angle-right' size={30} color="black" style={styles.menuIcon2} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={handleShowPostModal}>
                        <Image source={require('../assets/imagesPfa/plus.png')} style={styles.menuIcon} />
                        <Text style={{ color: "black", fontSize: 18, marginRight: 115 }}>Posts</Text>
                        <FontAwesome5 name='angle-right' size={30} color="black" style={styles.menuIcon2} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={()=> {navigation.navigate("Mytragets"); getTrajetsByID(profile.id)}}>
                        <Image source={require('../assets/imagesPfa/localisation.png')} style={styles.menuIcon} />
                        <Text style={{ color: "black", fontSize: 18, marginRight: 70 }}>Destination</Text>
                        <FontAwesome5 name='angle-right' size={30} color="black" style={styles.menuIcon2} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => { navigation.navigate("Support") }}>
                        <Image source={require('../assets/imagesPfa/heart.png')} style={styles.menuIcon} />
                        <Text style={{ color: "black", fontSize: 18, marginRight: 100 }}>Support</Text>
                        <FontAwesome5 name='angle-right' size={30} color="black" style={styles.menuIcon2} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={logout}>
                        <Image source={require('../assets/imagesPfa/logout.png')} style={styles.menuIcon} />
                        <Text style={{ color: "black", fontSize: 18, marginRight: 95 }}>Log Out</Text>
                        <FontAwesome5 name='angle-right' size={30} color="black" style={styles.menuIcon2} />
                    </TouchableOpacity>
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
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "96%",
        maxHeight: "100%",
        marginRight: 40,
        borderRadius: 45,
        borderTopRightRadius: 45,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 40,
        backgroundColor: "#FFF",
    },
    Header: {
        flexDirection: 'row',
        marginBottom: 30
    },
    txt: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 6,
    },
    back: {
        marginRight: 95
    },
    msg: {
        marginLeft: 95
    },
    img: {
        height: 172,
        width: 183,
        borderRadius: 30,
        marginBottom: 20,
    },
    imgplace:{
        height: 172,
        width: 183,
        borderRadius: 30,
        marginBottom: 20,
        backgroundColor: "#F2F2F2",
    },
    profileName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    menu: {
        flexDirection: 'row',
        borderRadius: 20,
        width: "92%",
        alignItems: "center",
        justifyContent: "center",
        height: "9%",
        marginBottom: 11
    },
    menuIcon: {
        marginRight: 30
    },
    menuIcon2: {
        marginLeft: 100
    },
    postModalContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        height: 450,
        width: "100%",
        backgroundColor: "white",
    },
    inputView2: {
        backgroundColor: "#F2F2F2",
        width: 350,
        borderRadius: 20,
        height: 230,
        top: 0
    },
    TextInput2: {
        color: "black",
        padding: 10,
        marginLeft: 20,
        fontSize: 18,
        fontWeight: "bold",
    },
})

export default ProfileScreen;