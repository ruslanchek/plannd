import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../common/colors";
import { Routes } from "../../common/routes";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ELEMENT_SIZES } from "../../common/constants";

interface IProps {
  focused: boolean;
  routeName: string;
  tintColor?: string;
  horizontal?: boolean;
}

const ICON_NAMES = {
  [Routes.HomeScreen]: "wallet",
  [Routes.SettingsScreen]: "cog"
};

export const TabBarIcon: React.FC<IProps> = props => {
  const { focused, routeName } = props;
  const iconColor = focused ? COLORS.TEXT.toString() : COLORS.TEXT.toString();

  return (
    <View style={styles.root}>
      <Icon
        name={ICON_NAMES[routeName]}
        size={ELEMENT_SIZES.TAB_BAR_ICON_SIZE}
        color={iconColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: ELEMENT_SIZES.TAB_BAR_ICON_SIZE,
    height: ELEMENT_SIZES.TAB_BAR_ICON_SIZE
  }
});
