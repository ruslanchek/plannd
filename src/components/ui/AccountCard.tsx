import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PADDING, BORDER_RADIUS, FONT_SIZES, FONT_FAMILY } from '../../common/constants';
import { COLORS } from '../../common/colors';
import { IconWithShape } from './IconWithShape';

export const AccountCard: React.FC = () => {
  return (
    <View style={styles.root}>
      <IconWithShape shape='square' size={54} name='bullseye' color={COLORS.BG_CONTRAST} />
      <View style={styles.info}>
        <Text style={styles.title}>Hellenic Bank</Text>
        <Text style={styles.amount}>$100,990,923.12</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.REGULAR,
    backgroundColor: COLORS.ACCENT.toString(),
    borderRadius: BORDER_RADIUS.LARGE,
    flexDirection: 'row',
  },

  info: {
    marginLeft: PADDING.MEDUIM,
  },

  title: {
    color: COLORS.BG_CONTRAST.alpha(0.8).toString(),
    fontSize: FONT_SIZES.REGULAR,
    fontFamily: FONT_FAMILY.REGULAR,
  },

  amount: {
    marginTop: PADDING.TINY,
    color: COLORS.BG_CONTRAST.toString(),
    fontSize: FONT_SIZES.SEMI_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
});
