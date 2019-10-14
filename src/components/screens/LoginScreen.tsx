import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogIn, authHandleFacebookLogin } from '../../helpers/authHelpers';
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
import { TextButton } from '../ui/TextButton';
import { Routes } from '../../common/routes';
import { Col } from '../ui/Col';

export interface ISettingsScreenParams {}

export const LoginScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ModalShadow>
      <BgTint>
        <KeyboardAvoidingView style={styles.root}>
          <Text style={STYLES.H1}>{localizeText('Header::Login')}</Text>
          <Row>
            <Col>
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
            </Col>
          </Row>

          <Row>
            <Col>
              <TextInput
                autoCapitalize='none'
                autoCompleteType='password'
                numberOfLines={1}
                enablesReturnKeyAutomatically
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
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomButton
                disabled={loading}
                theme='accent'
                text={localizeText('Button::Login')}
                onPress={() => {
                  setLoading(true);
                  authHandleLogIn(email, password);
                  setLoading(false);
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <View style={styles.centerButton}>
                <TextButton
                  onPress={() => navigation.navigate(Routes.PasswordResetScreen)}
                  text={localizeText('Button::PasswordReset')}
                />
              </View>
            </Col>
          </Row>

          <Row>
            <Col>
              <SocialOr />
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomButton
                disabled={loading}
                theme='facebook'
                text={localizeText('Button::FacebookLogin')}
                onPress={() => authHandleFacebookLogin()}
                icon={<Icon name='facebook' size={26} color={COLORS.FACEBOOK.toString()} />}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomButton
                disabled={loading}
                theme='twitter'
                text={localizeText('Button::TwitterLogin')}
                onPress={() => {}}
                icon={<Icon name='twitter' size={26} color={COLORS.TWITTER.toString()} />}
              />
            </Col>
          </Row>
        </KeyboardAvoidingView>
      </BgTint>
    </ModalShadow>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
  },
  centerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
