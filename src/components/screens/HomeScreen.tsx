import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogOut } from '../../helpers/authHelpers';
import { translate } from '../../helpers/localeHelpers';

export interface ISettingsScreenParams {}

export const HomeScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;

  return (
    <View style={styles.root}>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={() => authHandleLogOut(navigation)}></Button>
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
