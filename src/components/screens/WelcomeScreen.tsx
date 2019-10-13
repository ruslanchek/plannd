import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleMockLogin } from '../../helpers/authHelpers';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { Routes } from '../../common/routes';
import { BgTint } from '../ui/BgTint';

export interface ISettingsScreenParams {}

export const WelcomeScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;

  return (
    <BgTint>
      <View style={styles.root}>
        <Row>
          <Button title='Mock' onPress={() => authHandleMockLogin(navigation)} />
          <Button title='Login' onPress={() => navigation.navigate(Routes.LoginScreen)} />
          <Button title='Register' onPress={() => navigation.navigate(Routes.RegisterScreen)} />
        </Row>
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
    flex: 1,
  },
});
