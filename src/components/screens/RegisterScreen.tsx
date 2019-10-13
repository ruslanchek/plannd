import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogIn, authHandleRegister } from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { SocialOr } from '../ui/SocialOr';

export interface ISettingsScreenParams {}

export const RegisterScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
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
            text={localizeText('Button::Register')}
            onPress={() => authHandleRegister(email, password)}
          />
        </Row>

        <SocialOr />
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
