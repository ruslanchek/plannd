import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authBootstrap } from '../../helpers/authHelpers';

export interface ISettingsScreenParams {}

export const AppLoadingScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  useEffect(() => {
    authBootstrap(props.navigation);
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
