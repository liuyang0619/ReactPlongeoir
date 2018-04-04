/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image,
  Dimensions
} from 'react-native';
import Header from './header'

export default class Profile extends Component{
  render() {
    
    return(
    <View>
        <Text>
          Welcome to your profile page!
        </Text>
    </View>
    )
  }
}
AppRegistry.registerComponent('Profile', () => Profile);