import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  focused: boolean;
  horizontal: boolean;
  tintColor: string;
  routeName: string;
}

export const TabBarIcon: React.FC<IProps> = props => (
  <View style={styles.root}></View>
);

const styles = StyleSheet.create({
  root: {
    width: 20,
    height: 20,
    backgroundColor: "red"
  }
});
