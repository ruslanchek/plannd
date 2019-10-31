import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleAnonimousLogin } from '../../helpers/authHelpers';
import { Row } from '../ui/Row';
import { ERoutes } from '../../common/routes';
import { BgTint } from '../ui/BgTint';
import { TextButton } from '../ui/TextButton';
import { CustomButton } from '../ui/CustomButton';
import { localizeText } from '../../helpers/localeHelpers';
import { Col } from '../ui/Col';
import { WelcomeSlider } from '../ui/WelcomeSlider';
import { PADDING } from '../../common/constants';
import { STYLES } from '../../common/styles';
import { FullscreenLoading } from '../ui/FullscreenLoading';
import { getInset } from 'react-native-safe-area-view';

export interface ISettingsScreenParams {}

export const WelcomeScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const height = useMemo(() => {
    const { height } = Dimensions.get('window');
    const paddingBottom = getInset('bottom', false);
    const paddingTop = getInset('top', false);

    return height - paddingBottom - paddingTop;
  }, []);

  return (
    <BgTint>
      {loading && <FullscreenLoading />}

      <View style={styles.wrapper}>
        <ScrollView style={{ height }}>
          <View
            style={[
              styles.root,
              {
                minHeight: height,
              },
            ]}>
            <View>
              <Row>
                <Col>
                  <WelcomeSlider />
                </Col>
              </Row>
              <View style={styles.inner}>
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
                  <Col>
                    <Text style={[STYLES.FADED_TEXT, STYLES.CENTERED_TEXT]}>{localizeText('Text::WelcomePromo')}</Text>
                    <View style={[STYLES.CENTERED, { marginTop: 5 }]}>
                      <TextButton
                        text={localizeText('Button::Skip')}
                        onPress={async () => {
                          setLoading(true);
                          await authHandleAnonimousLogin(navigation);
                          setLoading(false);
                        }}
                      />
                    </View>
                  </Col>
                </Row>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </BgTint>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },

  inner: {
    paddingHorizontal: PADDING.MEDUIM,
  },

  wrapper: {
    flex: 1,
  },
});
