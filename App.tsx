import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { TabBar } from "./src/components/ui/TabBar";
import { TabBarIcon } from "./src/components/ui/TabBarIcon";
import { TabBarLabel } from "./src/components/ui/TabBarLabel";
import { HomeScreen } from "./src/components/screens/HomeScreen";
import { SettingsScreen } from "./src/components/screens/SettingsScreen";

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen,
    SettingsScreen
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
    tabBarComponent: TabBar
  }
);

export default createAppContainer(TabNavigator);
