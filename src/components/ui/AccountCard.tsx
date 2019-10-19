import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PADDING, BORDER_RADIUS, FONT_SIZES } from '../../common/constants';
import { COLORS } from '../../common/colors';

const CHART_HEIGHT = 100;
const STROKE_WIDTH = 3;

export const AccountCard: React.FC = props => {
  const [width, setWidth] = useState(0);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hellenic Bank</Text>
      <Text style={styles.amount}>$100,990,923.12</Text>
      <View
        style={styles.chartWrapper}
        onLayout={event => {
          setWidth(event.nativeEvent.layout.width);
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.REGULAR,
    backgroundColor: COLORS.ACCENT.toString(),
    borderRadius: BORDER_RADIUS.LARGE,
  },

  chartWrapper: {
    left: -PADDING.REGULAR - STROKE_WIDTH * 2,
    bottom: -PADDING.REGULAR - STROKE_WIDTH / 2,
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
