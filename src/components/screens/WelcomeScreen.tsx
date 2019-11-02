import React, { useMemo, useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { Row } from '../ui/Row';
import { ERoutes } from '../../common/routes';
import { BgTint } from '../ui/BgTint';
import { CustomButton } from '../ui/CustomButton';
import { localizeText } from '../../helpers/localeHelpers';
import { Col } from '../ui/Col';
import { IWelcomeSliderHandlers, WelcomeSlider } from '../ui/WelcomeSlider';
import { PADDING } from '../../common/constants';
import { FullscreenLoading } from '../ui/FullscreenLoading';
import { STYLES } from '../../common/styles';
import { TextButton } from '../ui/TextButton';
import { authHandleAnonymousLogin } from '../../helpers/authHelpers';
import { EAuthScreenMode, IAuthScreenParams } from './AuthScreen';
import { useScreenSizes } from '../../hooks/useScreenSizes';
import { NextButtonIcon } from '../ui/NextButtonIcon';

export interface IWelcomeScreenParams {}

export const WelcomeScreen: React.FC<NavigationSwitchScreenProps<IWelcomeScreenParams>> = props => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [animatedDisclaimerValue] = useState(new Animated.Value(isLastSlide ? 1 : 0));
  const { height, paddingBottom, paddingTop } = useScreenSizes();
  const slider = useRef<IWelcomeSliderHandlers | undefined>();
  const disclaimerStyles = [
    styles.disclaimer,
    {
      opacity: animatedDisclaimerValue,
      transform: [
        {
          scale: animatedDisclaimerValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1],
          }),
        },
      ],
    },
  ];

  const animateDisclaimer = (toValue: number) => {
    Animated.spring(animatedDisclaimerValue, {
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const handleNextSlide = () => {
    if (slider.current) {
      slider.current.nextItem();
    }
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
          <View style={styles.innerWrapper}>
            <View style={styles.top}>
              <WelcomeSlider
                ref={slider}
                onSlideChanged={(index, isLastSlide) => {
                  setIsLastSlide(isLastSlide);
                  animateDisclaimer(isLastSlide ? 1 : 0);
                }}
              />
            </View>

            <View style={styles.bottom}>
              <Animated.View style={disclaimerStyles} pointerEvents={isLastSlide ? 'auto' : 'none'}>
                <Text style={[STYLES.CENTERED_TEXT, STYLES.FADED_TEXT, STYLES.SMALL_TEXT]}>
                  {localizeText('Text::WelcomePromo')}
                </Text>
                <View style={[STYLES.CENTERED, { marginTop: 5 }]}>
                  <TextButton
                    text={localizeText('Button::SkipRegister')}
                    onPress={async () => {
                      setLoading(true);
                      await authHandleAnonymousLogin(navigation);
                      setLoading(false);
                    }}
                  />
                </View>
              </Animated.View>

              {isLastSlide ? (
                <Row noMargin>
                  <Col>
                    <CustomButton
                      theme='default'
                      text={localizeText('Button::Login')}
                      onPress={() => {
                        const params: IAuthScreenParams = {
                          mode: EAuthScreenMode.Login,
                        };
                        navigation.navigate(ERoutes.AuthScreen, params);
                      }}
                    />
                  </Col>
                  <Col flex={0.1} />
                  <Col>
                    <CustomButton
                      theme='accent'
                      text={localizeText('Button::Register')}
                      onPress={() => {
                        const params: IAuthScreenParams = {
                          mode: EAuthScreenMode.Register,
                        };
                        navigation.navigate(ERoutes.AuthScreen, params);
                      }}
                    />
                  </Col>
                </Row>
              ) : (
                <CustomButton
                  icon={<NextButtonIcon />}
                  iconPosition='end'
                  theme='accent'
                  text={localizeText('Button::Continue')}
                  onPress={handleNextSlide}
                />
              )}
            </View>
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

  innerWrapper: {
    flex: 1,
  },

  top: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },

  bottom: {
    paddingHorizontal: PADDING.LARGE,
    paddingBottom: PADDING.LARGE,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  disclaimer: {
    paddingBottom: PADDING.MEDIUM,
  },

  wrapper: {
    flex: 1,
  },
});
