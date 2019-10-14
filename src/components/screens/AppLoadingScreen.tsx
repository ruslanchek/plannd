import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authBootstrap } from '../../helpers/authHelpers';
import { BgTint } from '../ui/BgTint';

export interface ISettingsScreenParams {}

export const AppLoadingScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  useEffect(() => {
    authBootstrap(props.navigation);
  }, []);

  return (
    <BgTint>
      <View style={styles.root}>
        <ActivityIndicator />
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
