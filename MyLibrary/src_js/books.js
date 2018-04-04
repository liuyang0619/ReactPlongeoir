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

export default class Books extends Component{
  render() {
    
    return(
    <View>
        <Text>
          Mes livres
        </Text>
    </View>
    )
  }
}