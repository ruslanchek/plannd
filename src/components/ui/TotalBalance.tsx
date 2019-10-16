import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../common/colors';
import { PADDING, BORDER_RADIUS, SHADOWS, FONT_SIZES, FONT_FAMILY } from '../../common/constants';
import { STYLES } from '../../common/styles';

interface IProps {}

export const TotalBalance: React.FC<IProps> = props => {
  const {} = props;

  return (
    <View style={styles.root}>
      <Text style={STYLES.SUBTITLE}>Total balance</Text>
      <Text style={styles.amount}>$6,980.23</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.WHITE.toString(),
    padding: PADDING.MEDUIM,
    borderRadius: BORDER_RADIUS.LARGE,
    ...SHADOWS.ELEVATION_1,
  },

  amount: {
    marginTop: 4,
    fontSize: FONT_SIZES.SEMI_LARGE,
    fontWeight: '800',
  },
});
