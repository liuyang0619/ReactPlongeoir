
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import Header from './header'
import Profile from './profile'

export default class Home extends Component{
  /*constructor(props){
    super(props);
    const { navigate } = this.props.navigation;
    
  }*/
  /*static navigationOptions = {
    title: 'Accueil', 
    //headerRight: <Button title='Info'/>
    headerLeft: (
      <Button
          title='Menu'
          onPress={() => navigate('DrawerOpen')}
      />
  ),
  };*/
  render() {
    const { navigate } = this.props.navigation;
    const instructions = Platform.select({
        ios: 'Press Cmd+R to reload,\n' +
          'Cmd+D or shake for dev menu',
        android: 'Double tap R on your keyboard to reload,\n' +
          'Shake or press menu button for dev menu',
      });
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return(
    <View>
        <Header {...this.props}/>
        <Image source={require('.././images/accueil.png')} style={{width: imageWidth, height: imageHeight}}>
        </Image>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button
        title="Go to profile"
        onPress={() =>
            navigate('Profile', { name: 'Jane' })
        }
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });