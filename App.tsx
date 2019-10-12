import React, { useState, useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { TabBar } from './src/components/ui/TabBar';
import { TabBarIcon } from './src/components/ui/TabBarIcon';
import { TabBarLabel } from './src/components/ui/TabBarLabel';
import { HomeScreen } from './src/components/screens/HomeScreen';
import { SettingsScreen } from './src/components/screens/SettingsScreen';
import { Routes } from './src/common/routes';
import { AppLoadingScreen } from './src/components/screens/AppLoadingScreen';
import { LoginScreen } from './src/components/screens/LoginScreen';

const AppStack = createBottomTabNavigator(
  {
    [Routes.HomeScreen]: HomeScreen,
    [Routes.SettingsScreen]: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: props => {
        const { routeName } = navigation.state;
        return <TabBarIcon {...props} routeName={routeName} />;
      },
      tabBarLabel: props => {
        const { routeName } = navigation.state;
        return <TabBarLabel {...props} routeName={routeName} />;
      },
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
    },
    tabBarComponent: TabBar,
    initialRouteName: Routes.HomeScreen,
  },
);

const AuthStack = createStackNavigator(
  {
    [Routes.LoginScreen]: LoginScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: Routes.LoginScreen,
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      [Routes.AppLoadingScreen]: AppLoadingScreen,
      [Routes.AuthStack]: AuthStack,
      [Routes.AppStack]: AppStack,
    },
    {
      initialRouteName: Routes.AppLoadingScreen,
    },
  ),
);

export default App;
