import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Browse from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import PlayStoryScreen from './screens/PlayStoryScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  BrailleScript: Browse,
  AudioLessons: ReadStoryScreen,
  OtherInformation: PlayStoryScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "AudioLessons"){
        return(
          <Image
          source={require("./assets/audio.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "BrailleScript"){
        return(
          <Image
          source={require("./assets/braille.png")}
          style={{width:40, height:40}}
        />)

      }

      else if(routeName === "OtherInformation"){
        return(
          <Image
          source={require("./assets/images2.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
  TabNavigator : TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAF1DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
