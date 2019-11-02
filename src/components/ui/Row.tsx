import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PADDING } from '../../common/constants';

interface IProps {
  noMargin?: boolean;
}

export const Row: React.FC<IProps> = props => {
  const { children, noMargin } = props;
  return <View style={[styles.root, noMargin ? {} : { marginBottom: PADDING.LARGE }]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
});
