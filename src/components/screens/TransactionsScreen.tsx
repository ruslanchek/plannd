import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationSwitchScreenProps, useTheme } from 'react-navigation';

export interface ISettingsScreenParams {}

export const TransactionsScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  return (
    <View style={styles.root}>
      <Text>Transactions</Text>
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
