import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SingupScreen from '../screens/SingupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SupportScreen from '../screens/SupportScreen';
import { useContext } from 'react';
import { AuthContext } from './../context/AuthContext';
import MyprofileScreen from './../screens/MyprofileScreen';
import EditprofileScreen from './../screens/EditprofileScreen';
import GetstartedScreen from '../screens/GetstartedScreen';
import MytragetsScreen from '../screens/MytragetsScreen';
import AddtrajetScreen from '../screens/AddtrajetScreen';

const stack = createNativeStackNavigator();

const Navigation = () =>{
    const {userInfo} = useContext(AuthContext);
    return(
       <NavigationContainer>
           <stack.Navigator initialRouteName="GetStarted">
           {userInfo.token ? (
               <>
               <stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
               <stack.Screen name="Profile" component={ProfileScreen}  options={{headerShown:false}}/>
               <stack.Screen name="Support" component={SupportScreen}  options={{headerShown:false}}/>
               <stack.Screen name="Myprofile" component={MyprofileScreen} options={{headerShown:false}}/>
               <stack.Screen name="Editprofile" component={EditprofileScreen} options={{headerShown:false}} />
               <stack.Screen name="Mytragets" component={MytragetsScreen} options={{headerShown:false}} />
               <stack.Screen name="AddTrajets" component={AddtrajetScreen} options={{headerShown:false}} />
               </>
            )
           :(  
               <>
               <stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
               <stack.Screen name="Singup" component={SingupScreen} options={{headerShown:false}}/>
               <stack.Screen name="GetStarted" component={GetstartedScreen} options={{headerShown:false}}/>
               </>
               )}    
           </stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigation;