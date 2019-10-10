import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Carousel } from "../ui/Carousel";

export interface ISettingsScreenParams {}

export const HomeScreen: React.FC<
  NavigationScreenProp<ISettingsScreenParams>
> = props => {
  const {} = props;

  return (
    <View style={styles.root}>
      <Carousel />
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
