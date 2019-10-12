import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';
import { ELEMENT_SIZES, PADDING, BORDER_RADIUS } from '../../common/constants';
import { COLORS } from '../../common/colors';

export const TabBar = props => {
  return <BottomTabBar {...props} style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    height: ELEMENT_SIZES.TAB_BAR_HEIGHT,
    paddingTop: 4,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderTopStartRadius: BORDER_RADIUS.LARGE,
    borderTopEndRadius: BORDER_RADIUS.LARGE,
    shadowColor: COLORS.TEXT_FADED.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -5,
      width: 0,
    },
  },
});
