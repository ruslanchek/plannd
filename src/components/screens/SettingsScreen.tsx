import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationSwitchScreenProps, useTheme } from 'react-navigation';

export interface ISettingsScreenParams {}

export const SettingsScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const theme = useTheme();

  return (
    <View style={styles.root}>
      <Text>Settings {theme}</Text>
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
