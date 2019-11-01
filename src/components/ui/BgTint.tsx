import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../common/colors';

export const BgTint: React.FC = props => {
  const { children } = props;
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.BG.toString(),
  },
});
