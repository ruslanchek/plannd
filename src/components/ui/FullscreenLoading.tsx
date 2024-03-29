import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../common/colors';

export const FullscreenLoading: React.FC = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator color={COLORS.TEXT_FADED.toString()} size='large' />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.ELEMENT_BG.alpha(0.75).toString(),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});
