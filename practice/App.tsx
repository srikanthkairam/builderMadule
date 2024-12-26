import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./component/SplashScreen";
import OnBordingScreen from "./component/OnBordingScreen";
  import messaging from '@react-native-firebase/messaging';
  const Stack = createNativeStackNavigator();
  import { NativeModules } from 'react-native';
function Testaa(){
  return<View><Text>hh</Text></View>
}
function App() {

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}
const getToken = async () => {
  const token = await messaging().getToken();
  console.log('Device Token:', token);
};
// messaging().onMessage(async (remoteMessage) => {
//   console.log('Notification received:', remoteMessage);
// });
useEffect(()=>{
  const {sri}=NativeModules
  // requestUserPermission()
  // getToken()
  sri.show("message");
},[])
  const linking = {
       prefixes: ["https://srikanth.module","srikanth.module://"],  
       config: {
         screens: {
          OnBordingScreen: {     // ====> Screen name to navigate
             path: "demo/:id",   // ===> path to which given url should match
             parse: {
               id: (id: any) => `${id}`,
             },
           },
           SplashScreen: {
             path: "changepswd/token/:id",  //===> :id is param that we pass
             parse: {
               id: (id: any) => `${id}`,
             },
           },
           Testaa: {
            path: "Testaa",  //===> :id is param that we pass
            parse: {
              id: (id: any) => `${id}`,
            },
          },
         },
       },
     };
    
  return (<NavigationContainer linking={linking} ><Stack.Navigator  initialRouteName="SplashScreen" screenOptions={{headerShown:false ,}} >
    <Stack.Screen  name="SplashScreen"  component={SplashScreen} />
    <Stack.Screen name="OnBordingScreen"  component={OnBordingScreen} />
    <Stack.Screen name="Testaa"  component={Testaa} />
  </Stack.Navigator></NavigationContainer>)
}

export default App
