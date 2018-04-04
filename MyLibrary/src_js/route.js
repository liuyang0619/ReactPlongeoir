import Home from './home'
import Profile from './profile'

import {
    StackNavigator, navigationOptions 
  } from 'react-navigation';
  
 export const MyApp = StackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile}
  },
  { 
    headerMode: 'none' 
  }
);
