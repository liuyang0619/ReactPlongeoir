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

export default class Header extends Component{
    constructor(props){
        super(props);
        const { navigate } = this.props.navigate;
        this.onActionSelected = this.onActionSelected.bind(this);
    }
    
  render(){
    return (
      <ToolbarAndroid
      navIcon={require('.././images/settings.png')}
      title="MyLibrary"
      style={styles.toolbar}
      actions={[{title: 'Settings', icon: require('.././images/profile.png'), show: 'always'}]}
      onActionSelected={this.onActionSelected} />
    );
  }
  onActionSelected(position){
    this.props.navigate('Profile', { name: 'Jane' });
    if (position === 0) { // index of 'Settings'
      //showSettings();
      console.log("in toolbar");
    }
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
	backgroundColor: '#4883da',
  }
});
