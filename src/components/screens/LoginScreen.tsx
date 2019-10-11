import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationSwitchScreenProps } from "react-navigation";
import { authHandleLogIn } from "../../helpers/authHelpers";

export interface ISettingsScreenParams {}

export const LoginScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;

  return (
    <View style={styles.root}>
      <Button title="Login" onPress={() => authHandleLogIn(navigation)} />
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
