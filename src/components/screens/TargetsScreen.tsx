import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationSwitchScreenProps, useTheme } from 'react-navigation';

export interface ITargetsScreenParams {}

export const TargetsScreen: React.FC<NavigationSwitchScreenProps<ITargetsScreenParams>> = props => {
  return (
    <View style={styles.root}>
      <Text>Targets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
