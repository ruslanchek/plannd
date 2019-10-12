import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { bootstrapApp } from '../../helpers/bootstrapHelpers';

export interface ISettingsScreenParams {}

export const AppLoadingScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;

  useEffect(() => {
    bootstrapApp(navigation);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle='default' />
      <ActivityIndicator />
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
