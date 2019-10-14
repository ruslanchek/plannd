import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationSwitchScreenProps, ScrollView } from 'react-navigation';
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

export interface ISettingsScreenParams {}

export const WelcomeScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;

  return (
    <BgTint>
      <Row>
        <WelcomeSlider />
      </Row>

      <View style={styles.root}>
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
        <Row>
          <TextButton text='Mock' onPress={() => authHandleMockLogin(navigation)} />
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
