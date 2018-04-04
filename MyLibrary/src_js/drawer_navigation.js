import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    Hidden
} from 'react-native';
import { MyApp } from "./route";
import Library from "./library";
import Books from "./books";
import Home from './home'
import Profile from './profile'
import Header from './header'
import { DrawerNavigator } from "react-navigation";

const DrawerNavigation = DrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                drawerLabel: 'Accueil',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/library.png')}
                        style={ {tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
        Library: {
            screen: Library,
            navigationOptions: {
                drawerLabel: 'Bibliothèque',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/library.png')}
                        style={ {tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
        Books: {
            screen: Books,
            navigationOptions: {
                drawerLabel: 'Mes livres',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/library.png')}
                        style={ {tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                drawerLabel: () => null
              }
        },
        Header: {
            screen: Header,
            navigationOptions: {
                drawerLabel: () => null
              }
        }
    }
);

export default DrawerNavigation;