import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';
import { ELEMENT_SIZES, BORDER_RADIUS, SHADOWS } from '../../common/constants';
import { COLORS } from '../../common/colors';

export const TabBar = props => {
  return (
    <View style={styles.root}>
      <BottomTabBar {...props} style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.TINT_BG.toString(),
  },

  bar: {
    height: ELEMENT_SIZES.TAB_BAR_HEIGHT,
    paddingTop: 4,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderTopStartRadius: BORDER_RADIUS.LARGE,
    borderTopEndRadius: BORDER_RADIUS.LARGE,
    ...SHADOWS.ELEVATION_1_REVERSED,
  },
});
