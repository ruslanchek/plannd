import React, { useState } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import {
  authHandleLogIn,
  authHandleFacebookLogin,
  authHandleGoogleLogin,
  authHandleRegister,
} from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { SocialOr } from '../ui/SocialOr';
import { TextButton } from '../ui/TextButton';
import { ERoutes } from '../../common/routes';
import { Col } from '../ui/Col';
import { GoogleLogo } from '../ui/GoogleLogo';
import { FullscreenLoading } from '../ui/FullscreenLoading';
import { FacebookLogo } from '../ui/FacebookLogo';
import { Tabs } from '../ui/Tabs';
import { useScreenSizes } from '../../hooks/useScreenSizes';

export interface IAuthScreenParams {
  mode: EAuthScreenMode;
}

export enum EAuthScreenMode {
  Login,
  Register,
}

const TEXTS = {
  [EAuthScreenMode.Login]: {
    submit: 'Button::Login',
    facebook: 'Button::FacebookLogin',
    google: 'Button::GoogleLogin',
  },
  [EAuthScreenMode.Register]: {
    submit: 'Button::Register',
    facebook: 'Button::FacebookRegister',
    google: 'Button::GoogleRegister',
  },
};

export const AuthScreen: React.FC<NavigationSwitchScreenProps<IAuthScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(navigation.getParam('mode', EAuthScreenMode.Register));
  const { safeHeight, height, paddingBottom, paddingTop } = useScreenSizes();

  const tabs = [
    {
      id: EAuthScreenMode.Register,
      text: localizeText('Header::Register'),
    },
    {
      id: EAuthScreenMode.Login,
      text: localizeText('Header::Login'),
    },
  ];

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

  return (
    <BgTint>
      {loading && <FullscreenLoading />}

      <ScrollView style={styles.root}>
        <KeyboardAvoidingView behavior='position' enabled>
          <View
            style={[
              {
                minHeight: height,
                paddingBottom,
                paddingTop,
              },
            ]}>
            <View style={styles.top}>
              <Row>
                <Col>
                  <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../../assets/images/logos/logo.png')} />
                  </View>
                </Col>
              </Row>
              <Tabs tabs={tabs} currentId={mode} onSelect={setMode} />
            </View>

            <View style={styles.bottom}>
              <View>
                <Row>
                  <Col>
                    <TextInput
                      autoCorrect={false}
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
                      onSubmitEditing={handleSubmit}
                      onChange={event => {
                        setEmail(event.nativeEvent.text);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
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
                      style={STYLES.INPUT}
                      value={password}
                      onSubmitEditing={handleSubmit}
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
                      text={localizeText(TEXTS[mode].submit)}
                      onPress={handleSubmit}
                    />
                  </Col>
                </Row>

                {mode === EAuthScreenMode.Login && (
                  <View style={STYLES.CENTERED}>
                    <TextButton
                      onPress={() => navigation.navigate(ERoutes.PasswordResetScreen)}
                      text={localizeText('Button::PasswordReset')}
                    />
                  </View>
                )}
              </View>

              <Row>
                <Col>
                  <SocialOr />
                </Col>
              </Row>

              <View>
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
                      icon={<FacebookLogo size={26} />}
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
                      icon={<GoogleLogo size={26} />}
                    />
                  </Col>
                </Row>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
  },

  logoImage: {
    width: 72,
    height: 72,
  },

  top: {
    flexShrink: 0,
  },

  bottom: {
    flex: 1,
    padding: PADDING.LARGE,
    justifyContent: 'space-between',
  },
});
