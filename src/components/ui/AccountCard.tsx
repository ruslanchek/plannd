import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PADDING, BORDER_RADIUS, FONT_SIZES } from '../../common/constants';
import { COLORS } from '../../common/colors';

export const AccountCard: React.FC = props => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>Hellenic Bank</Text>
        <Text style={styles.amount}>2,990.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
    backgroundColor: COLORS.ACCENT.toString(),
    borderRadius: BORDER_RADIUS.LARGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: COLORS.WHITE.alpha(0.8).toString(),
    fontSize: FONT_SIZES.REGULAR,
  },

  amount: {
    marginTop: 4,
    color: COLORS.WHITE.toString(),
    fontSize: FONT_SIZES.SEMI_LARGE,
    fontWeight: '800',
  },
});
