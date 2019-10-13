import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogIn } from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';

export interface ISettingsScreenParams {}

export const LoginScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BgTint>
      <View style={styles.root}>
        <Row>
          <TextInput
            numberOfLines={1}
            placeholder={localizeText('InputPlaceholder::Email')}
            placeholderTextColor={COLORS.TEXT_PLACEHOLDER.toString()}
            textContentType='emailAddress'
            style={STYLES.INPUT}
            value={email}
            onChange={event => {
              setEmail(event.nativeEvent.text);
            }}
          />
        </Row>

        <Row>
          <TextInput
            numberOfLines={1}
            placeholder={localizeText('InputPlaceholder::Password')}
            placeholderTextColor={COLORS.TEXT_PLACEHOLDER.toString()}
            textContentType='password'
            secureTextEntry
            style={STYLES.INPUT}
            value={password}
            onChange={event => {
              setPassword(event.nativeEvent.text);
            }}
          />
        </Row>

        <Row>
          <CustomButton
            theme='accent'
            text='Login'
            onPress={() => authHandleLogIn(email, password)}
          />
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
