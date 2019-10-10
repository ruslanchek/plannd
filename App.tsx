import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { TabBar } from "./src/components/ui/TabBar";
import { FONT_SIZES } from "./src/common/constants";
import { TabBarIcon } from "./src/components/ui/TabBarIcon";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <TextInput />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <TextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: FONT_SIZES.TINY
  },

  tabStyle: {}
});

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
      }
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      labelStyle: styles.labelStyle,
      tabStyle: styles.tabStyle
    },
    tabBarComponent: TabBar
  }
);

export default createAppContainer(TabNavigator);
