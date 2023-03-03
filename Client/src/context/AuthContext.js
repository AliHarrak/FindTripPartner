import React, { createContext } from 'react';
import axios from 'axios';
import { BASE_URL, IMAGE_URL } from './../Config';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [posts, setPosts] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [msg, setMsg] = useState({});
    const [nomImage, setNomImage] = useState('');
    const [postImages, setPostImages] = useState('');
    const [profile,setProfile] = useState({});
    const [trajets, setTrajets] = useState({});

    const singup = (fname, lname, email, password) => {
        axios.post(`${BASE_URL}/user/sign-up`, {
            fname, lname, email, password
        }).then(res => {
            let status = res.data;
            console.log(status.message);
            setMsg(status.message);
            console.log(msg);
        }).catch(err => {
            console.log(`Log in error ${err}`);
        });
    }


    const login = (email, password) => {
        axios.post(`${BASE_URL}/user/login`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));


        }).catch(err => {
            console.log(`Log in error ${err}`);
        });
    }

    const logout = () => {
        setUserInfo({});
        console.log(userInfo);
    }


    const support = (userName, userEmail, content) => {
        axios.post(`${BASE_URL}/support`, {
            userName, userEmail, content
        }).then(res => {
            let status = res.description;
            console.log(status.message);
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }

    const uploadImage = (image) => {
        axios.post(`${IMAGE_URL}`, { image }).then(res => {
            console.log(res.url);
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }

    const getPosts = () => {
        axios.get(`${BASE_URL}/post/posts/${userInfo.data.id}`).then(res => {
            let posts = res.data;
            setPosts(posts);
            console.log(posts)
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }

    const sendPost = (userId, description, imageUrl) => {
        axios.post(`${BASE_URL}/post/save`, {
            userId, description, imageUrl
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }

    const destroyPost = (userId, postId) => {
        axios.delete(`${BASE_URL}/post/${userId}/${postId}`).
            then(res => {
                console.log(res);
            }).catch(err => {
                console.log(`sending error ${err}`);
            });
    }

    const showOnePost = (postId) => {
       axios.get(`${BASE_URL}/post/${postId}`).
       then(res => {
        console.log(res);
       }).catch(err => {
        console.log(`sending error ${err}`);
    });
    }

    const creatProfile = (id,userId) => {
        axios.post(`${BASE_URL}/profile/create`,{id,userId})
        . then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
    }

    const getProfile = (id) => {
        axios.get(`${BASE_URL}/profile/${id}`).then(res => {
            console.log(res)
            let profil = res.data;
            setProfile(profil)
            console.log(profile);
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }
    const updateProfile = (description,image,tel,pays,ville,age,id) => {
        axios.patch(`${BASE_URL}/profile/update/${id}`, {
            description,image,tel,pays,ville,age
        })
        .then(res => {
            console.log(res);
            setProfile(res.data.profile);
        })
        .catch(err => {
            console.log(`error ${err}`);;
        });
    }

    const getTrajetsByID = (profileId) => {
        axios.get(`${BASE_URL}/traget/tragets/${profileId}`).then(res => {
            let trajets = res.data;
            setTrajets(trajets);
            console.log(trajets)
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }
    const DestroyTrajet = (profileId,id)=>{
        axios.delete(`${BASE_URL}/traget/${profileId}/${id}`).
        then(res => {
            console.log(res);
        }).catch(err => {
            console.log(`sending error ${err}`);
        });
    }





    return (
        <AuthContext.Provider
            value={{
                trajets,
                posts,
                userInfo,
                msg,
                nomImage,
                profile,
                singup,
                login,
                logout,
                support,
                getPosts,
                uploadImage,
                sendPost,
                destroyPost,
                showOnePost,
                creatProfile,
                getProfile,
                updateProfile,
                getTrajetsByID,
                DestroyTrajet,
            }}>
            {children}</AuthContext.Provider>
    );

}

