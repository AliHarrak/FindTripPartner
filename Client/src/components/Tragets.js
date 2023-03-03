import React,{useState,useContext} from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Modal } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from './../context/AuthContext';


const Tragets = ({Pname,Pimage,villeDep,villeArr,dateDep,dateArr,nbrPers,sexe,age,type,Pid,id}) => {
    etTrajetModal(false);
  }
    return (
        <View style={styles.container}>
            <Modal visible={trajetModal} animationType="slide">
                   <View style={styles.modalCntn}>
                   <TouchableOpacity style={{ maxHeight: 64, width: 80, marginBottom:30,marginLeft:30 }} onPress={handleHideTrajetModal}>
                                <View ><FontAwesome5 name='times-circle' size={35} color="#F2BB16" /></View>
                   </TouchableOpacity>
                   <Image source={{ uri: `http://10.0.2.2:5000/uploads/${Pimage}`}} style={styles.img} />
                   <Text style={styles.modalTxt}>{Pname}</Text>
                   <View style={styles.line}></View>
                   <View style={{flexDirection:"row",marginTop:10}}>
                   <FontAwesome5 name='location-arrow' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>From {villeDep} To {villeArr}</Text>
                   </View>
                   <View style={{flexDirection:"row",marginTop:10}}>
                   <FontAwesome5 name='calendar' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>Start At {dateDep} End {dateArr}</Text>
                   </View>
                   <View style={{flexDirection:"row",marginTop:10}}>
                   <FontAwesome5 name='user-friends' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>A Group Of {nbrPers} Persons</Text>
                   </View>
                   <View style={{flexDirection:"row",marginTop:10}}>
                   <FontAwesome5 name='transgender' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>Gender : {sexe}</Text>
                   </View>
                   <View style={{flexDirection:"row",marginTop:10}}>
                   <FontAwesome5 name='angle-double-right' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>Age Prefered To Be Older Than {age}</Text>
                   </View>
                   <View style={{flexDirection:"row",marginTop:10}}>
                   <FontAwesome5 name='campground' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>This Trip For {type}</Text>
                   </View>
                   <TouchableOpacity style={{width: 80,  marginTop:40  }} onPress={handleDestroy}>
                                <View style={{ backgroundColor: "#F2BB16", borderRadius: 10, alignItems: "center", justifyContent: "center", height:44}}><Text style={{color:"white", fontSize:18, }}>Delete</Text></View>
               </TouchableOpacity>
                   </View>
            </Modal>
            <TouchableOpacity style={styles.cntn} onPress={handleShowTrajetModal}>
                <View style={{flexDirection:"row",}}>
                <Image source={{ uri: `http://10.0.2.2:5000/uploads/${Pimage}`}} style={styles.img} />
                <View style={styles.infoZone}>
                <View style={{marginLeft:10}}>
                <Text style={[styles.infoTxt,{marginLeft:26}]}>{Pname}</Text>
                  <View style={{flexDirection:"row",}}>
                  <FontAwesome5 name='location-arrow' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>From {villeDep} To {villeArr}</Text>
                  </View>
                  <View style={{flexDirection:"row",}}>
                  <FontAwesome5 name='calendar' size={20} color="#F2BB16" />
                   <Text style={styles.infoTxt}>AT {dateDep}</Text>
                  </View>
                  <Text style={[styles.infoTxt,{marginLeft:26}]}>{type}</Text>
                </View>
                </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginBottom:10
    },
    cntn: {
        backgroundColor: "#E8E8E8",
        width: 390,
        height: 140,
        borderRadius: 20,
        alignItems:"center",
        justifyContent:"center",
    },
    img:{
        width: 89,
        height: 110,
        borderRadius:15,
    },
    infoZone:{
        width:270,
        height:110,
        marginLeft:5,
        justifyContent:"center",
    },
    infoTxt:{
        fontSize:16,
        fontWeight:"bold",
        color:"black",
        marginLeft:10,
        marginBottom:6
    },
    modalCntn:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    modalTxt:{
        fontSize:16,
        fontWeight:"bold",
        color:"black",
        marginBottom:6,
        marginLeft:8
    },
    line: {
        borderBottomWidth: 2,
        borderColor: "black",
        width: "90%",
    },

});

export default Tragets;