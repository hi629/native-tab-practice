import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class SecondTab extends React.Component{
    static navigationOptions = {
        tabBarLabel:'タブ２だよ',
        tabBarIcon:({tintColor})=>(
            <FontAwesome name="heart" size={32} color={tintColor}/>
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
                これはタブ２です
                </Text>
            </View>
        );
    }
}