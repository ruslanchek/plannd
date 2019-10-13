import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import {
  authHandleLogIn,
  authHandleFacebookLogin,
  authHandleResetPassword,
} from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { SocialOr } from '../ui/SocialOr';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ModalShadow } from '../ui/ModalShadow';
import { TextButton } from '../ui/TextButton';

export interface ISettingsScreenParams {}

export const PasswordResetScreen: React.FC<
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
          <Text style={STYLES.H1}>{localizeText('Header::PasswordReset')}</Text>
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
            <CustomButton
              disabled={loading}
              theme='accent'
              text={localizeText('Button::RequestPasswordReset')}
              onPress={() => {
                setLoading(true);
                authHandleResetPassword(email);
                setLoading(false);
              }}
            />
          </Row>
        </ScrollView>
      </BgTint>
    </ModalShadow>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: PADDING.MEDUIM,
    paddingBottom: PADDING.MEDUIM,
  },
  centerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
