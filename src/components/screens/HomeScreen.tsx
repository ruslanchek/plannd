import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationSwitchScreenProps } from "react-navigation";

export interface ISettingsScreenParams {}

export const HomeScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const {} = props;

  return (
    <View style={styles.root}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
