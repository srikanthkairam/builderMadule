import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./component/SplashScreen";
import OnBordingScreen from "./component/OnBordingScreen";
const Stack = createNativeStackNavigator();
const SplashscreenStack=( props:any)=>(
  <Stack.Navigator  initialRouteName="SplashScreen" screenOptions={{headerShown:false ,}} >
    <Stack.Screen  name="SplashScreen"  component={SplashScreen} />
    <Stack.Screen name="OnBordingScreen"  component={OnBordingScreen} />
  </Stack.Navigator>
)
function App() {
  return (<NavigationContainer><SplashscreenStack/></NavigationContainer>)
}

export default App
