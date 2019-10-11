import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabBar } from "react-navigation-tabs";
import { ELEMENT_SIZES } from "../../common/constants";
import { COLORS } from "../../common/colors";
import { useTheme } from "react-navigation";

export const TabBar = props => {
  const theme = useTheme();
  return <BottomTabBar {...props} style={[styles.root, themedStyles[theme]]} />;
};

const themedStyles = StyleSheet.create({
  light: {
    borderTopColor: COLORS.LIGHT_GRAY.toString(),
    backgroundColor: COLORS.RED.toString()
  },

  dark: {}
});

const styles = StyleSheet.create({
  root: {
    height: ELEMENT_SIZES.TAB_BAR_HEIGHT,
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
