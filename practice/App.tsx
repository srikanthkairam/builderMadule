import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./component/SplashScreen";
import OnBordingScreen from "./component/OnBordingScreen";
const Stack = createNativeStackNavigator();

function Testaa(){
  return<View><Text>hh</Text></View>
}
function App() {
  const linking = {
    
       prefixes: ["https://example"],  
     
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
