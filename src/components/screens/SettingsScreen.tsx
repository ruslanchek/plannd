import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogOut } from '../../helpers/authHelpers';
import { TextButton } from '../ui/TextButton';

export interface ISettingsScreenParams {}

export const SettingsScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;
  return (
    <View style={styles.root}>
      <Text>Settings</Text>
      <TextButton
        text='Logout'
        onPress={() => {
          authHandleLogOut(navigation);
        }}
      />
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
