import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { TabBar } from './src/components/ui/TabBar';
import { HomeScreen } from './src/components/screens/HomeScreen';
import { SettingsScreen } from './src/components/screens/SettingsScreen';
import { ERoutes } from './src/common/routes';
import { AppLoadingScreen } from './src/components/screens/AppLoadingScreen';
import { AuthScreen } from './src/components/screens/AuthScreen';
import { HistoryScreen } from './src/components/screens/HistoryScreen';
import { TargetsScreen } from './src/components/screens/TargetsScreen';
import { StatusBar } from 'react-native';
import { WelcomeScreen } from './src/components/screens/WelcomeScreen';
import { PasswordResetScreen } from './src/components/screens/PasswordResetScreen';
import { AddTransactionModalProvider } from './src/components/modals/AddTransactionModalProvider';

const AppStack = createBottomTabNavigator(
  {
    [ERoutes.HomeScreen]: HomeScreen,
    [ERoutes.HistoryScreen]: HistoryScreen,
    [ERoutes.TargetsScreen]: TargetsScreen,
    [ERoutes.SettingsScreen]: SettingsScreen,
  },
  {
    lazy: true,
    tabBarComponent: TabBar,
    initialRouteName: ERoutes.HomeScreen,
  },
);

const AuthStack = createStackNavigator(
  {
    [ERoutes.WelcomeScreen]: WelcomeScreen,
    [ERoutes.AuthScreen]: AuthScreen,
    [ERoutes.PasswordResetScreen]: PasswordResetScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: ERoutes.AuthScreen, //@todo
  },
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      [ERoutes.AppLoadingScreen]: AppLoadingScreen,
      [ERoutes.AuthStack]: AuthStack,
      [ERoutes.AppStack]: AppStack,
    },
    {
      initialRouteName: ERoutes.AppLoadingScreen,
    },
  ),
);

export default () => {
  return (
    <AddTransactionModalProvider>
      <StatusBar barStyle='light-content' />
      <Navigation />
    </AddTransactionModalProvider>
  );
};
