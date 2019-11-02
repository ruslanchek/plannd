import React, { useState } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, ScrollView, Image, Dimensions, Text } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import {
  authHandleLogIn,
  authHandleFacebookLogin,
  authHandleGoogleLogin,
  authHandleRegister,
} from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { ELEMENT_SIZES, PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { TextButton } from '../ui/TextButton';
import { Col } from '../ui/Col';
import { GoogleLogo } from '../ui/GoogleLogo';
import { FullscreenLoading } from '../ui/FullscreenLoading';
import { FacebookLogo } from '../ui/FacebookLogo';
import { useScreenSizes } from '../../hooks/useScreenSizes';
import { NextButtonIcon } from '../ui/NextButtonIcon';
import { Header } from '../ui/Header';
import { ERoutes } from '../../common/routes';

export interface IAuthScreenParams {
  mode: EAuthScreenMode;
}

export enum EAuthScreenMode {
  Login,
  Register,
}

const TEXTS = {
  [EAuthScreenMode.Login]: {
    facebook: 'Button::FacebookLogin',
    google: 'Button::GoogleLogin',
    switch: 'Button::Register',
    switchDisclaimer: 'Text::LoginDisclaimer',
    title: 'Title::AuthLogin',
    subtitle: 'Subtitle::AuthLogin',
  },
  [EAuthScreenMode.Register]: {
    facebook: 'Button::FacebookRegister',
    google: 'Button::GoogleRegister',
    switch: 'Button::Login',
    switchDisclaimer: 'Text::RegisterDisclaimer',
    title: 'Title::AuthRegister',
    subtitle: 'Subtitle::AuthRegister',
  },
};

export const AuthScreen: React.FC<NavigationSwitchScreenProps<IAuthScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(navigation.getParam('mode', EAuthScreenMode.Register));
  const { height, paddingBottom, paddingTop } = useScreenSizes();

  const handleSubmit = async () => {
    setLoading(true);

    switch (mode) {
      case EAuthScreenMode.Login: {
        await authHandleLogIn(email, password, navigation);
        break;
      }

      case EAuthScreenMode.Register: {
        await authHandleRegister(email, password, navigation);
        break;
      }
    }

    setLoading(false);
  };

  const handleSwitchMode = () => {
    setMode(mode === EAuthScreenMode.Register ? EAuthScreenMode.Login : EAuthScreenMode.Register);
  };

  const handleResetPassword = () => {
    navigation.navigate(ERoutes.PasswordResetScreen);
  };

  return (
    <BgTint>
      {loading && <FullscreenLoading />}

      <View style={styles.root}>
        <View
          style={[
            {
              minHeight: height,
              paddingBottom,
              paddingTop,
            },
          ]}>
          <View style={styles.top}>
            <Header
              navigation={navigation}
              title={localizeText(TEXTS[mode].title)}
              subtitle={localizeText(TEXTS[mode].subtitle)}
            />
          </View>

          <View style={styles.mid}>
            <View>
              <Row>
                <Col>
                  <View style={STYLES.INPUT_EFFECTS}>
                    <TextInput
                      autoCorrect={false}
                      autoCapitalize='none'
                      autoCompleteType='email'
                      keyboardType='email-address'
                      returnKeyType='next'
                      numberOfLines={1}
                      enablesReturnKeyAutomatically
                      placeholder={localizeText('InputPlaceholder::Email')}
                      placeholderTextColor={COLORS.TEXT_PLACEHOLDER.toString()}
                      textContentType='emailAddress'
                      style={[STYLES.INPUT, STYLES.INPUT_SEPARATOR_BOTTOM]}
                      value={email}
                      onSubmitEditing={handleSubmit}
                      onChange={event => {
                        setEmail(event.nativeEvent.text);
                      }}
                    />

                    <TextInput
                      autoCorrect={false}
                      autoCapitalize='none'
                      autoCompleteType='password'
                      numberOfLines={1}
                      enablesReturnKeyAutomatically
                      placeholder={localizeText('InputPlaceholder::Password')}
                      placeholderTextColor={COLORS.TEXT_PLACEHOLDER.toString()}
                      textContentType='password'
                      secureTextEntry
                      style={[STYLES.INPUT, mode === EAuthScreenMode.Login ? styles.inputWithButton : null]}
                      value={password}
                      onSubmitEditing={handleSubmit}
                      onChange={event => {
                        setPassword(event.nativeEvent.text);
                      }}
                    />

                    {mode === EAuthScreenMode.Login && (
                      <View style={styles.inputButton}>
                        <TextButton faded onPress={handleResetPassword} text={localizeText('Button::ForgotPassword')} />
                      </View>
                    )}
                  </View>
                </Col>
              </Row>

              <Row>
                <Col>
                  <CustomButton
                    disabled={loading}
                    theme='accent'
                    text={localizeText('Button::Continue')}
                    onPress={handleSubmit}
                    icon={<NextButtonIcon />}
                    iconPosition='end'
                  />
                </Col>
              </Row>

              <View style={STYLES.CENTERED}>
                <View style={styles.disclaimer}>
                  <Text style={[STYLES.CENTERED_TEXT, STYLES.FADED_TEXT, STYLES.SMALL_TEXT, styles.disclaimerText]}>
                    {localizeText(TEXTS[mode].switchDisclaimer)}
                  </Text>
                  <TextButton onPress={handleSwitchMode} text={localizeText(TEXTS[mode].switch)} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottom}>
            <Row>
              <Col>
                <CustomButton
                  disabled={loading}
                  theme='facebook'
                  text={localizeText(TEXTS[mode].facebook)}
                  onPress={async () => {
                    setLoading(true);
                    await authHandleFacebookLogin(navigation);
                    setLoading(false);
                  }}
                  icon={<FacebookLogo size={34} />}
                />
              </Col>
            </Row>

            <Row noMargin>
              <Col>
                <CustomButton
                  disabled={loading}
                  theme='google'
                  text={localizeText(TEXTS[mode].google)}
                  onPress={async () => {
                    setLoading(true);
                    await authHandleGoogleLogin(navigation);
                    setLoading(false);
                  }}
                  icon={<GoogleLogo size={34} />}
                />
              </Col>
            </Row>
          </View>
        </View>
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  inputWithButton: {
    paddingRight: 80,
  },

  inputButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: ELEMENT_SIZES.INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: PADDING.MEDIUM,
  },

  disclaimer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  disclaimerText: {
    marginBottom: PADDING.TINY,
  },

  top: {
    flexShrink: 0,
  },

  mid: {
    flexGrow: 1,
    padding: PADDING.LARGE,
    justifyContent: 'center',
  },

  bottom: {
    paddingHorizontal: PADDING.LARGE,
    paddingBottom: PADDING.LARGE,
    justifyContent: 'space-between',
  },
});
