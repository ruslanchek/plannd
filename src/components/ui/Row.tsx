import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PADDING } from '../../common/constants';

export const Row: React.FC = props => {
  const { children } = props;
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    marginBottom: PADDING.MEDIUM,
    flexDirection: 'row',
  },
});
