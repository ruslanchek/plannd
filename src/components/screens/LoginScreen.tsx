import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogIn, authHandleRegister } from '../../helpers/authHelpers';
import { TextInput } from 'react-native-gesture-handler';
import { BgTint } from '../ui/BgTint';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';

export interface ISettingsScreenParams {}

export const LoginScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BgTint>
      <View style={styles.root}>
        <Text>Email</Text>
        <TextInput
          style={{
            backgroundColor: '#eee',
          }}
          value={email}
          onChange={event => {
            setEmail(event.nativeEvent.text);
          }}
        />

        <Text>Password</Text>
        <TextInput
          style={{
            backgroundColor: '#eee',
          }}
          value={password}
          onChange={event => {
            setPassword(event.nativeEvent.text);
          }}
        />

        <CustomButton
          theme='accent'
          text='Register'
          onPress={() => authHandleRegister(email, password)}
        />
        <CustomButton theme='default' text='Login' onPress={() => authHandleLogIn(navigation)} />
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
  },
});
