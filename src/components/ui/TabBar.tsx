import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabBar } from "react-navigation-tabs";
import { ELEMENT_SIZES } from "../../common/constants";
import { COLORS } from "../../common/colors";

export const TabBar = props => {
  return <BottomTabBar {...props} style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    height: ELEMENT_SIZES.TAB_BAR_HEIGHT,
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: COLORS.ELEMENT_STROKE.toString(),
    backgroundColor: COLORS.ELEMENT_BG.toString()
  }
});
