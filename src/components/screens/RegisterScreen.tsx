import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { NavigationSwitchScreenProps, ScrollView } from 'react-navigation';
import { authHandleRegister, authHandleFacebookLogin } from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { SocialOr } from '../ui/SocialOr';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ModalShadow } from '../ui/ModalShadow';

export interface ISettingsScreenParams {}

export const RegisterScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ModalShadow>
      <BgTint>
        <ScrollView style={styles.root}>
          <Row>
            <TextInput
              autoFocus
              autoCapitalize='none'
              autoCompleteType='email'
              keyboardType='email-address'
              numberOfLines={1}
              enablesReturnKeyAutomatically
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
              autoCapitalize='none'
              autoCompleteType='password'
              numberOfLines={1}
              enablesReturnKeyAutomatically
              placeholder={localizeText('InputPlaceholder::Password')}
              placeholderTextColor={COLORS.TEXT_PLACEHOLDER.toString()}
              textContentType='newPassword'
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
              disabled={loading}
              theme='accent'
              text={localizeText('Button::Register')}
              onPress={() => {
                setLoading(true);
                authHandleRegister(email, password);
                setLoading(false);
              }}
            />
          </Row>

          <Row>
            <SocialOr />
          </Row>

          <Row>
            <CustomButton
              disabled={loading}
              theme='facebook'
              text={localizeText('Button::FacebookRegister')}
              onPress={() => authHandleFacebookLogin()}
              icon={<Icon name='facebook' size={26} color={COLORS.FACEBOOK.toString()} />}
            />
          </Row>

          <Row>
            <CustomButton
              disabled={loading}
              theme='twitter'
              text={localizeText('Button::TwitterRegister')}
              onPress={() => {}}
              icon={<Icon name='twitter' size={26} color={COLORS.TWITTER.toString()} />}
            />
          </Row>
        </ScrollView>
      </BgTint>
    </ModalShadow>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
    flex: 1,
  },
});
