import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './components/login/Login';
import Home from './components/home/Home';
import DrawerComponent from './DrawerComponent';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ScreenOptions = {
    headerShown: false,
}
const Router = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

const MyDrawer = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator
            drawerContent={(props)=><DrawerComponent {...props}/>}
                screenOptions={{ headerShown: false,drawerStyle:{width:"80%"} }}
                initialRouteName="App"
            >
                <Drawer.Screen name="App" component={Router} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default MyDrawer

const styles = StyleSheet.create({})
