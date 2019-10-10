import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabBar } from "react-navigation-tabs";
import { ELEMENT_SIZES } from "../../common/constants";
import { COLORS } from "../../common/colors";

export const TabBar = props => <BottomTabBar {...props} style={styles.root} />;

const styles = StyleSheet.create({
  root: {
    height: ELEMENT_SIZES.TAB_BAR_HEIGHT,
    borderTopColor: COLORS.LIGHT_GRAY.toString(),
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
