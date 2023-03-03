import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,Modal,TextInput } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import {useState, useContext } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Posts = ({desc , image,id}) =>{
   

 

    return(
       <View style={styles.container}>
            <Modal visible={postModal} animationType="slide">
               <View style={styles.ViewModal}>
               <TouchableOpacity style={{ maxHeight: 64, width: 80, marginBottom:20,marginLeft:50  }} onPress={handleHidePostModal}>
                                <View ><FontAwesome5 name='times-circle' size={35} color="#F2BB16" /></View>
               </TouchableOpacity>
               <Image source={{ uri: `http://10.0.2.2:5000/uploads/${image}`}} style={styles.img} />
                <View style={styles.DescView2}>
                       <Text style={styles.txtModal}>{desc}</Text>
                </View>
                
               <TouchableOpacity style={{width: 80,  marginTop:40  }} onPress={handleDestroy}>
                                <View style={{ backgroundColor: "#F2BB16", borderRadius: 10, alignItems: "center", justifyContent: "center", height:44}}><Text style={{color:"white", fontSize:18, }}>Delete</Text></View>
               </TouchableOpacity>
                
               </View>

            </Modal>
            <View style={styles.content}>
                 
                 <TouchableOpacity style={styles.viewPost} onPress={handleShowPostModal}>
                 <Text style={styles.txt}>{desc}</Text>
                 <Image style={styles.image} source={{uri: `http://10.0.2.2:5000/uploads/${image}`}}/>
                 </TouchableOpacity>
             </View>

       </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:10
    },

    content:{
       width:380,
       height:320,
       alignItems:"center",
       borderRadius:10,
       backgroundColor:"#F2F2F2",
       shadowColor:"black",
       shadowOffset:{width:7,height:7},
       elevation:10,
       shadowOpacity:10,
       marginRight:10,
       marginLeft:10,
       marginBottom:30
    },

    image:{
       width:"95%",
       height:200,
    },

    txt:{
       fontSize:14,
       fontWeight: 'bold',
       fontWeight:"bold",
       marginTop:10,
       marginLeft:5,
       height:50,
       textAlign:"center"
       
    },

    txtModal:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:10,
        marginRight:10,
        height:230,  
        
     },

    viewPost:{
        width:350,
        height:300,
        borderRadius:7,
        alignItems:"center",
        justifyContent:"center",

    },

    ViewModal:{
         flex:1,
         alignItems:"center",
         justifyContent:"center",

    },

    img: {
        height: 280,
        width: 350,
        borderRadius: 10,
        marginBottom: 10,

    },

    DescView2: {
        backgroundColor: "#F2F2F2",
        width: 350,
        borderRadius: 20,
        height: 230,
        top: 0,
        alignItems:"center"
    },



})


export default Posts;