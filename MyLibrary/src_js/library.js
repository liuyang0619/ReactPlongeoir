import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image,
  Dimensions,
  Button
} from 'react-native';
import Header from './header'

export default class Library extends Component{
  static navigationOptions = {
    title: 'Library', 
    //headerRight: <Button title='Info'/>
    headerLeft: (
      <Button
          title='Menu'
          onPress={() => navigate('DrawerOpen')}
      />
    )
  };
  render() {
    
    return(
    <View>
        <Text>
          Bibliothèque
        </Text>
    </View>
    )
  }
}