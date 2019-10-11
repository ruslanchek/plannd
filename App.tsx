import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { TabBar } from "./src/components/ui/TabBar";
import { TabBarIcon } from "./src/components/ui/TabBarIcon";
import { TabBarLabel } from "./src/components/ui/TabBarLabel";
import { HomeScreen } from "./src/components/screens/HomeScreen";
import { SettingsScreen } from "./src/components/screens/SettingsScreen";
import { Routes } from "./src/common/routes";
import { AuthLoadingScreen } from "./src/components/screens/AuthLoadingScreen";
import { LoginScreen } from "./src/components/screens/LoginScreen";

const AppStack = createBottomTabNavigator(
  {
    [Routes.HomeScreen]: HomeScreen,
    [Routes.SettingsScreen]: SettingsScreen
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
      }
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: true
    },
    tabBarComponent: TabBar,
    initialRouteName: Routes.HomeScreen
  }
);

const AuthStack = createStackNavigator({
  [Routes.LoginScreen]: LoginScreen
});

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      [Routes.AuthLoadingScreen]: AuthLoadingScreen,
      [Routes.AuthStack]: AuthStack,
      [Routes.AppStack]: AppStack
    },
    {
      initialRouteName: Routes.AuthLoadingScreen
    }
  )
);

export default () => {
  return <Navigation theme="light" />;
};
