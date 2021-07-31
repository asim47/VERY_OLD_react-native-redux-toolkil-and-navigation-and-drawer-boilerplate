import React from 'react'
import { StyleSheet, Text, View,  Pressable } from 'react-native'
import { Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Home = (props) => {

    const { navigation } = props;
    return (
        <View style={{alignItems:"center"}}>
            <Text>Home</Text>
            
            <Button
             icon={
                <FontAwesome
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
                onPress={() => navigation.navigate('Login')}
                type="solid"
                title="Go To Login"
                buttonStyle={{height:100,width:200,borderRadius:10,backgroundColor:"black"}}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
