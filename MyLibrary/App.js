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
import { MyApp } from './src_js/route'
import DrawerNavigation from './src_js/drawer_navigation'

//type Props = {};
export default class App extends Component{
  render() {
    return (
      <DrawerNavigation />
    );
  }
}

AppRegistry.registerComponent('MyLibrary', () => App);
