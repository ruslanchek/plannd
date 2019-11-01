import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../common/colors';
import { PADDING, BORDER_RADIUS, FONT_SIZES, FONT_FAMILY } from '../../common/constants';
import { STYLES, SHADOWS } from '../../common/styles';
import { IconWithShape } from './IconWithShape';

interface IProps {}

export const TotalBalance: React.FC<IProps> = props => {
  const {} = props;

  return (
    <View style={styles.root}>
      <IconWithShape shape='square' size={54} name='money-check-alt' color={COLORS.TEXT_FADED} />
      <View style={styles.info}>
        <Text style={STYLES.SUBTITLE}>Total balance</Text>
        <Text style={styles.amount}>$6,980.23</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.BG_CONTRAST.toString(),
    padding: PADDING.REGULAR,
    borderRadius: BORDER_RADIUS.LARGE,
    fontFamily: FONT_FAMILY.REGULAR,
    flexDirection: 'row',
    ...SHADOWS.ELEVATION_1,
  },

  info: {
    marginLeft: PADDING.MEDIUM,
  },

  amount: {
    marginTop: PADDING.TINY,
    fontSize: FONT_SIZES.SEMI_LARGE,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.TEXT.toString(),
  },
});
