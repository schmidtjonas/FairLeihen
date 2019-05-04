import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';
import Colors from '../../constants/Colors';

const HomeStack = createStackNavigator({
  Home: {
    screen : HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Product: ProductScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: { 
    activeTintColor: Colors.lightblue,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Karte',
  tabBarOptions: { 
    activeTintColor: Colors.lightblue,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: {
    screen : ProfileScreen,
    navigationOptions: {
      header: null,
    },
  }
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarOptions: { 
    activeTintColor: Colors.lightblue,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};


export default createBottomTabNavigator({
  Home: HomeStack,
  Map: MapStack,
  Profile: ProfileStack,
});
