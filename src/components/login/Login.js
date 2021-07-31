import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { Button } from 'react-native-elements';
const Login = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch()


    const Working = useSelector(state => state.common.Working)

    return (
        <View style={{ alignItems: "center" }}>
            <Text>working : {Working ? Working : "NO"}</Text>
            <Button
                onPress={() => navigation.navigate('Home')}
                type="solid"
                title="Go To Home"
                buttonStyle={{height:100,width:200,borderRadius:10,backgroundColor:"black"}}
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})
