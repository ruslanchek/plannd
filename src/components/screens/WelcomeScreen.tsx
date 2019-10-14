import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleMockLogin } from '../../helpers/authHelpers';
import { Row } from '../ui/Row';
import { Routes as ERoutes } from '../../common/routes';
import { BgTint } from '../ui/BgTint';
import { TextButton } from '../ui/TextButton';
import { CustomButton } from '../ui/CustomButton';
import { localizeText } from '../../helpers/localeHelpers';
import { Col } from '../ui/Col';
import { WelcomeSlider } from '../ui/WelcomeSlider';
import { PADDING } from '../../common/constants';
import { STYLES } from '../../common/styles';

export interface ISettingsScreenParams {}

export const WelcomeScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;

  return (
    <BgTint>
      <View style={styles.root}>
        <Row>
          <Col>
            <WelcomeSlider />
          </Col>
        </Row>

        <View style={styles.inner}>
          <Row></Row>

          <Row>
            <Text style={STYLES.TEXT}>{localizeText('Text::WelcomePromo')}</Text>
          </Row>

          <Row>
            <Col>
              <CustomButton
                theme='default'
                text={localizeText('Button::Login')}
                onPress={() => navigation.navigate(ERoutes.LoginScreen)}
              />
            </Col>
            <Col flex={0.1} />
            <Col>
              <CustomButton
                theme='accent'
                text={localizeText('Button::Register')}
                onPress={() => navigation.navigate(ERoutes.RegisterScreen)}
              />
            </Col>
          </Row>

          <Row></Row>

          <Row>
            <Col>
              <View style={STYLES.CENTERED}>
                <TextButton
                  text={localizeText('Button::Skip')}
                  onPress={() => authHandleMockLogin(navigation)}
                />
              </View>
            </Col>
          </Row>
        </View>
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: PADDING.MEDUIM,
  },

  inner: {
    paddingHorizontal: PADDING.MEDUIM,
  },
});
