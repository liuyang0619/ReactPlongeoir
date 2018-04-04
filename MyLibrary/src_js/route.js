import Home from './home'
import Profile from './profile'
import Header from './header'
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
} from 'react-native';
import {
    StackNavigator, navigationOptions, DrawerNavigator
  } from 'react-navigation';
  
 export const MyApp = StackNavigator({
    Home: { 
      screen: Home,
      navigationOptions:({ navigation }) => ({
        title: 'Accueil',
        headerLeft: (
            <Button
                title='Menu'
                onPress={() => navigation.navigate('DrawerOpen')}
            />
        ),
        headerRight: (
          <Button
            title='Profile'
            onPress={() => navigation.navigate('Profile')}
      />)
    }), 
    },
    Profile: { 
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Connection',
        headerLeft: (
            <Button
                title='Menu'
                onPress={() => navigation.navigate('DrawerOpen')}
            />
        ),
    }),
    },
    Header: {
      screen: Header,
      navigationOptions: ({ navigation }) => ({
        title: 'Accueil',
        headerLeft: (
            <Button
                title='Menu'
                onPress={() => navigation.navigate('DrawerOpen')}
            />
        ),
    }),
    }
  },
  { 
    initialRouteName: 'Home',

  }
);