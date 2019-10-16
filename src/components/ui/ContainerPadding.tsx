import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PADDING } from '../../common/constants';

export const ContainerPadding: React.FC = props => {
  return <View style={styles.root}>{props.children}</View>;
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: PADDING.MEDUIM,
  },
});
