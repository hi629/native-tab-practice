import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class FirstTab extends React.Component{
    static navigationOptions = {
        tabBarLabel:'Tab1です',
        tabBarIcon:({tintColor})=>(
            <Entypo name="home" size={32} color={tintColor}/>
        )
    }
    render(){
        return (<View style={
                {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
                }
            }>
                <Text style={{fontSize:30}}>
                これはタブ１です
                </Text>
            </View>
        );
    }
}