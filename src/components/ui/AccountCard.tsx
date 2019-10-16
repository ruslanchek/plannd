import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { PADDING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../../common/constants';
import { COLORS } from '../../common/colors';
import { Chart } from './Chart';

export const AccountCard: React.FC = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hellenic Bank</Text>
      <Text style={styles.amount}>$100,990,923.12</Text>
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.REGULAR,
    backgroundColor: COLORS.ACCENT.toString(),
    borderRadius: BORDER_RADIUS.LARGE,
  },

  title: {
    color: COLORS.WHITE.alpha(0.8).toString(),
    fontSize: FONT_SIZES.REGULAR,
  },

  amount: {
    marginTop: 4,
    color: COLORS.WHITE.toString(),
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: '800',
  },
});
