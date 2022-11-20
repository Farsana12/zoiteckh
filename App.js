/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect }  from 'react';
import SplashScreen from "react-native-splash-screen";
import {  DefaultTheme ,NavigationContainer} from '@react-navigation/native';
import {
BackHandler,Alert
} from 'react-native';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();
export default function App({}) {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
    
  }, []);
 
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App!", "Are you sure you want to quit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
   <Stack.Navigator
   initialRouteName='Login'
   screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen
    name='Login'
    component={Login}
    />
     <Stack.Screen
    name='Welcome'
    component={Welcome}
   
    />
    <Stack.Screen
    name='Home'
    component={Home}
    />
   </Stack.Navigator>
    </NavigationContainer>
  );

  }


