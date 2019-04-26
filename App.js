import React from 'react';
import { Button, Image, Platform, View, Text,StyleSheet} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import Cust from './src/pages/Cust';
import RTable from './src/pages/RTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <MaterialCommunityIcons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = MaterialCommunityIcons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Details') {
    iconName = `cart${focused ? '' : '-outline'}`;
  }else if (routeName === 'Cust') {
    iconName = `coffee${focused ? '' : '-outline'}`;
  }else if (routeName === 'RTable') {
    iconName = `folder-star${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor}/>;
};
const RootStack= createBottomTabNavigator(
  {
    Home: {
      screen: RTable,
    },
    Details: {
      screen: DetailsScreen,
    },
    Cust:{
      screen:Cust,
    },
    RTable:{
      screen:HomeScreen
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
    

    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
     style:{
      backgroundColor:'#ccff',
      height: 50,
      shadowColor: 'red',
    shadowOffset: { width: 4, height: 4 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 6, 
    elevation: 10 
     },
     showLabel: false,
     showIcon: true,
     tabStyle: { // TabBar内单独tab的样式
         height: 50,
     },
     labelStyle: { // TabBar内单独tab的文字样式
         fontSize: 50,
     },
    }
  }
);
// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//     Cust:{
//       screen:Cust,
//     },
//     RTable:{
//       screen:RTable,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor:'#cccfff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
 
  shadowStyle: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 2,
    elevation: 4,
}
});