import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import uri from './images/uri'

import ReadingScreen from './screens/read';
import WritingScreen from './screens/write';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadingScreen},
  Write: {screen: WritingScreen},
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName);
    if(routeName === "Read"){
      return(
        <Image
        source={{uri:uri.read}}
        style={{width:80, height:35}}
      />
      )
      
    }
    else if(routeName === "Write"){
      return(
        <Image
        source={{uri:uri.write}}
        style={{width:40, height:40}}
      />)
      
    }
  }
})
}
);

const AppContainer =  createAppContainer(TabNavigator);