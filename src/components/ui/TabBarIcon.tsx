import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../common/colors";

interface IProps {
  focused: boolean;
  routeName: string;
  tintColor?: string;
  horizontal?: boolean;
}

export const TabBarIcon: React.FC<IProps> = props => {
  const { focused } = props;

  return (
    <View style={[styles.root, focused ? styles.rootFocused : null]}></View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.LIGHT_GRAY_2.toString()
  },

  rootFocused: {
    backgroundColor: COLORS.GRAY.toString()
  }
});
