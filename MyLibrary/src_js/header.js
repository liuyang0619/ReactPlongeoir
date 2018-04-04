/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image,
  Dimensions
} from 'react-native';
import Profile from './profile'
import MyApp from './route'

export default class Header extends Component{
    
  /*render(){
    const { navigate } = this.props.navigation;
    
    return (
      <ToolbarAndroid
      navIcon={require('.././images/settings.png')}
      title="MyLibrary"
      style={styles.toolbar}
      actions={[{title: 'Settings', icon: require('.././images/profile.png'), show: 'always'}]}
      onActionSelected={() =>
        navigate('Home', { name: 'Jane' })} />
    );
  }
  onAction(position){
    //navigate('Profile', { name: 'Jane' });
    if (position === 0) { // index of 'Settings'
      //showSettings();
      console.log("in toolbar");
    }
  }*/
  render(){
    const { navigate } = this.props.navigation;
    return (
      <ToolbarAndroid
      navIcon={require('.././images/settings.png')}
      title="MyLibrary"
      style={styles.toolbar}
      actions={[{title: 'Settings', icon: require('.././images/profile.png'), show: 'always'}]}
      onActionSelected={() =>
        this.props.navigation.navigate('Profile', { name: 'Jane' })}
        />
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
	backgroundColor: '#4883da',
  }
});
