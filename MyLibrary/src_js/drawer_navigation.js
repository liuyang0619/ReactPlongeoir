import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import { MyApp } from "./route";
import Library from "./library";
import Books from "./books";
import { DrawerNavigator } from "react-navigation";

const DrawerNavigation = DrawerNavigator(
    {
        Home: {
            screen: MyApp,
            navigationOptions: {
                drawerLabel: 'Home',
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
                drawerLabel: 'Library',
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
                drawerLabel: 'Books',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/library.png')}
                        style={ {tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
    }
);

export default DrawerNavigation;