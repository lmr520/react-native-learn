import React from 'react';
import { Button, Image, Platform, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import Cust from './src/pages/Cust';
import RTable from './src/pages/RTab';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./src/assets/images/nav1.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Cust:{
      screen:Cust,
    },
    RTable:{
      screen:RTable,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:'#cccfff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}