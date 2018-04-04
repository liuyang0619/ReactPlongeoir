/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
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
import Home from './src_js/home'
import Route, { MyApp } from './src_js/route'
import Profile from './src_js/profile'

//type Props = {};
export default class App extends Component{
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyLibrary', () => MyApp);
