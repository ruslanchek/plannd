import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../common/colors';
import SafeAreaView from 'react-native-safe-area-view';

export const BgTint: React.FC = props => {
  const { children } = props;
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.TINT_BG.toString(),
  },
});
