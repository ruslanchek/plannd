import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../common/colors";
import { FONT_SIZES } from "../../common/constants";

interface IProps {
  focused: boolean;
  routeName: string;
  tintColor?: string;
  horizontal?: boolean;
}

export const TabBarLabel: React.FC<IProps> = props => {
  const { focused, routeName } = props;

  return (
    <Text style={[styles.root, focused ? styles.rootFocused : null]}>
      {routeName}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    color: COLORS.LIGHT_GRAY_2.toString(),
    fontSize: FONT_SIZES.TINY
  },

  rootFocused: {
    color: COLORS.GRAY.toString()
  }
});
