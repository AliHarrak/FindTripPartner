import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { AuthContext } from './../context/AuthContext';
import { useContext, useState } from 'react';
import Posts from '../components/Posts';
import Photos from '../components/Photos';



const bg = require("../assets/imagesPfa/pawel-czerwinski-vI5XwPbGvmY-unsplash.jpg");

const MyprofileScreen = ({navigation}) => {
    const { userInfo, getPosts, posts,profile } = useContext(AuthContext);

    const [postsShow, setPostsShow] = useState(true);
    const [photosShow, setPhotosShow] = useState(false);
    const [postLine, setPostLine] = useState(3)
    const [photosLine, setPhotosline] = useState(null)
    const handlePostShow = () => {
        getPosts(userInfo.data.id);
        setPostsShow(true);
        setPhotosShow(false);
        setPostLine(3);
        setPhotosline(null);
    }
    const handlePhotosShow = () => {
        setPostsShow(false);
        setPhotosShow(true);
        setPostLine(null);
        setPhotosline(3);
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg} >

                <View style={styles.zoneImg}>
                    <View style={styles.part3}>
                        <Text style={styles.profileName}>@{userInfo.data.fname}</Text>
                        <Text style={{marginTop:15, textAlign:"center",}}>{profile.description}</Text>
                        <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate("Editprofile")}}>
                            <Text style={styles.loginText}>Edit Profile</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity onPress={handlePostShow}>
                                <Text style={[{ marginRight: 50, color: 'black', fontSize: 14, fontWeight: 'bold', borderBottomColor: 'black', paddingBottom: 5 }, { borderBottomWidth: postLine }]}>Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePhotosShow}>
                                <Text style={[{ color: 'black', fontSize: 14, fontWeight: 'bold', borderBottomColor: 'black', paddingBottom: 5 }, { borderBottomWidth: photosLine }]}>Photos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 600 }}>
                            {
                                postsShow ? (

                                    <ScrollView style={{ height: 700, marginVertical: 15 }} showsVerticalScrollIndicator={false}>
                                        {
                                            posts.reverse().map((item) => {
                                                return (
                                                    <Posts key={item.id} desc={item.description} image={item.imageUrl} id={item.id} />
                                                )
                                            })
                                        }
                                        <View style={{ height: 250 }}></View>
                                    </ScrollView>



                                ) : null
                            }
                            {
                                photosShow ? (
                                    <>
                                    <FlatList data={posts}
                                        renderItem={({ item }) => {
                                            console.log(item.imageUrl);
                                            return <Photos image={item.imageUrl}
                                                keyExtractor={item.id}
                                            />;
                                        }}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}

                                    />
                                    <View style={{ height: 50, marginBottom:10 }}></View>
                                    </>
                                ) : null
                            }
                            
                        </View>
                    </View>

                </View>
                    <Image source={{uri: `http://10.0.2.2:5000/uploads/${profile.image}`}} style={styles.profilePic} />

            </ImageBackground>
            
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center"
    },
    bg: {
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    part2: {
        alignItems: 'center',
    },
    part3: {
        marginTop: 70,
        alignItems: "center"
    },
    profilePic: {
        height: "16%",
        width: 115,
        borderWidth: 5,
        borderColor: "white",
        borderRadius: 150,
        marginBottom: 600,
        alignSelf:"center",
        marginLeft:11
    },
    zoneImg: {
        marginBottom: -858,
        backgroundColor: "white",
        height: 800,
        width: "100%",
        marginTop: 230,
        borderRadius: 50,
        alignItems: "center",

    },

    profileName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    loginBtn: {
        width: 130,
        borderRadius: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        backgroundColor: "white",
        elevation: 9,
    },
    loginText: {
        color: "#F2BB16",
        fontSize: 15,
        fontWeight:"bold"
    },
})


export default MyprofileScreen;




// <View style={styles.container}>
//     <ImageBackground source={bg} style={styles.bg} >
//         <View style={styles.zoneImg}>
//             <View style={styles.left}></View>
//             <Image source={require("../assets/imagesPfa/Profile.jpg")} style={styles.profilePic} />
//             <View style={styles.right}></View>
//         </View>
//     </ImageBackground>
//     <View style={styles.cntn}>
//         <Text style={styles.profileName}>@{userInfo.data.fname}</Text>
//         <Text>Hi, i am a designer and I like tripping </Text>
//         <TouchableOpacity style={styles.loginBtn}>
//             <Text style={styles.loginText}>Edit Profile</Text>
//         </TouchableOpacity>
//         <View style={{ flexDirection: 'row', marginTop: 10 }}>
//             <TouchableOpacity onPress={handlePostShow}>
//                 <Text style={[{ marginRight: 50, color: 'black', fontSize: 14, fontWeight: 'bold', borderBottomColor: 'black', paddingBottom: 5 }, { borderBottomWidth: postLine }]}>Posts</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handlePhotosShow}>
//                 <Text style={[{ color: 'black', fontSize: 14, fontWeight: 'bold', borderBottomColor: 'black', paddingBottom: 5 }, { borderBottomWidth: photosLine }]}>Photos</Text>
//             </TouchableOpacity>
//         </View>

//     </View>
// </View>

// container: {
//     flex: 1,
//     backgroundColor: "white"

// },
// bg: {
//     height: 140,
//     justifyContent: "center",
//     alignItems: "center",

// },
// profilePic: {
//     height: 128,
//     width: 125,
//     borderWidth: 5,
//     borderColor: "white",
//     borderRadius: 80
// },
// zoneImg: {
//     marginTop: 120,
//     flexDirection: "row",

// },
// right: {
//     height: 75,
//     width: 170,
//     backgroundColor: "white",
//     marginTop: 60,
//     borderTopRightRadius: 140,
// },
// left: {
//     height: 75,
//     width: 170,
//     backgroundColor: "white",
//     marginTop: 60,
//     borderTopLeftRadius: 140
// },
// cntn: {
//     marginTop: 70,
//     alignItems: "center",
//     height: 450
// },




{/* <FlatList data={posts.reverse()}
                                        renderItem={({ item }) => {
                                            console.log(item.imageUrl);
                                            return <Posts desc={item.description} image={item.imageUrl} />;
                                        }}
                                        style={{ marginTop: 20, height: 100, marginBottom: 35 }}
                                        horizontal={true}
                                    /> */}