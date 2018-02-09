import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FirstTab from './tabs/FirstTab';
import SecondTab from './tabs/SecondTab';

var MainScreenNavigotor = TabNavigator({
  Tab1: {screen:FirstTab},
  Tab2:{screen:SecondTab}
},{
  tabBarPosition:"bottom",
  swipeEnabled:true,
  tabBarOptions:{
    activeTintColor:"white",
    activeBackgroundColor:"darkgreen",
    inactiveTintColor:"black",
    inactiveBackgroundColor:"green"
  }
});

MainScreenNavigotor.navigationOptions = {
  title:"Tab example"
};

export default MainScreenNavigotor;