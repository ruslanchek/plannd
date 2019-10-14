import 'react-native-gesture-handler';
import React from 'react';
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
import { TransactionsScreen } from './src/components/screens/TransactionsScreen';
import { TargetsScreen } from './src/components/screens/TargetsScreen';
import { StatisticsScreen } from './src/components/screens/StatisticsScreen';
import { BgTint } from './src/components/ui/BgTint';
import { StatusBar } from 'react-native';
import { WelcomeScreen } from './src/components/screens/WelcomeScreen';
import { RegisterScreen } from './src/components/screens/RegisterScreen';
import { PasswordResetScreen } from './src/components/screens/PasswordResetScreen';

const AppStack = createBottomTabNavigator(
  {
    [Routes.HomeScreen]: HomeScreen,
    [Routes.TransactionsScreen]: TransactionsScreen,
    [Routes.TargetsScreen]: TargetsScreen,
    [Routes.StatisticsScreen]: StatisticsScreen,
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
    tabBarComponent: TabBar,
    initialRouteName: Routes.HomeScreen,
  },
);

const AuthStack = createStackNavigator(
  {
    [Routes.WelcomeScreen]: WelcomeScreen,
    [Routes.RegisterScreen]: RegisterScreen,
    [Routes.LoginScreen]: LoginScreen,
    [Routes.PasswordResetScreen]: PasswordResetScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: Routes.WelcomeScreen,
  },
);

const Navigation = createAppContainer(
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

export default () => {
  return (
    <BgTint>
      <StatusBar barStyle='dark-content' />
      <Navigation />
    </BgTint>
  );
};
