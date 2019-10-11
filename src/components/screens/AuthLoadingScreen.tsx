import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native";
import { NavigationSwitchScreenProps } from "react-navigation";
import { authBootstrap } from "../../helpers/authHelpers";

export interface ISettingsScreenParams {}

export const AuthLoadingScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;

  useEffect(() => {
    authBootstrap(navigation);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="default" />
      <ActivityIndicator />
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
