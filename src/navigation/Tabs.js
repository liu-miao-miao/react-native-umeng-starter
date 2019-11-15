import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import HomeTab from '../screens/tabs/Home';
import MallTab from '../screens/tabs/Mall';
import FindTab from '../screens/tabs/Find';
import MineTab from '../screens/tabs/Mine';

const Tabs = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      path: '/Home',
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    MallTab: {
      screen: MallTab,
      path: '/Mall',
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    FindTab: {
      screen: FindTab,
      path: '/Find',
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    MineTab: {
      screen: MineTab,
      path: '/Mine',
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'HomeTab',
    animationEnabled: false,
    swipeEnabled: false,
    lazy: true,
    tabBarPosition: 'bottom',
    backBehavior: 'none',
    tabBarOptions: {
      inactiveTintColor: '#615D58',
      activeTintColor: '#fc720a',
      style: {
        backgroundColor: '#fff',
        height: 50,
      },
      labelStyle: {
        fontSize: 10,
      },
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  },
);
