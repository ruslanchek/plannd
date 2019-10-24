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
import { LoginScreen } from './src/components/screens/LoginScreen';
import { TransactionsScreen } from './src/components/screens/TransactionsScreen';
import { TargetsScreen } from './src/components/screens/TargetsScreen';
import { StatisticsScreen } from './src/components/screens/StatisticsScreen';
import { StatusBar } from 'react-native';
import { WelcomeScreen } from './src/components/screens/WelcomeScreen';
import { RegisterScreen } from './src/components/screens/RegisterScreen';
import { PasswordResetScreen } from './src/components/screens/PasswordResetScreen';
import { AddTransactionModalProvider } from './src/components/modals/AddTransactionModalProvider';

const AppStack = createBottomTabNavigator(
  {
    [ERoutes.HomeScreen]: HomeScreen,
    [ERoutes.TransactionsScreen]: TransactionsScreen,
    [ERoutes.TargetsScreen]: TargetsScreen,
    [ERoutes.StatisticsScreen]: StatisticsScreen,
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
    [ERoutes.RegisterScreen]: RegisterScreen,
    [ERoutes.LoginScreen]: LoginScreen,
    [ERoutes.PasswordResetScreen]: PasswordResetScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: ERoutes.WelcomeScreen,
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
      <StatusBar barStyle='dark-content' />
      <Navigation />
    </AddTransactionModalProvider>
  );
};
