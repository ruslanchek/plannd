import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IProps {
  flex?: number;
}

export const Col: React.FC<IProps> = props => {
  const { children, flex } = props;
  return <View style={[styles.root, { flex: flex ? flex : 1 }]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
