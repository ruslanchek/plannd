import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../common/colors';

export const ModalShadow: React.FC = props => {
  const { children } = props;
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    shadowColor: COLORS.TEXT_FADED.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -5,
      width: 0,
    },
  },
});
