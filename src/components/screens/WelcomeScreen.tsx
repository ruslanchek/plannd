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
import { getInset } from 'react-native-safe-area-view';
import { STYLES } from '../../common/styles';
import { TextButton } from '../ui/TextButton';
import { authHandleAnonymousLogin } from '../../helpers/authHelpers';
import { EAuthScreenMode, IAuthScreenParams } from './AuthScreen';

export interface IWelcomeScreenParams {}

export const WelcomeScreen: React.FC<NavigationSwitchScreenProps<IWelcomeScreenParams>> = props => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [animatedDisclaimerValue] = useState(new Animated.Value(isLastSlide ? 1 : 0));
  const height = useMemo(() => {
    const { height } = Dimensions.get('window');
    const paddingBottom = getInset('bottom', false);
    const paddingTop = getInset('top', false);
    return height - paddingBottom - paddingTop;
  }, []);
  const slider = useRef<IWelcomeSliderHandlers | undefined>();
  const disclaimerStyles = [
    styles.disclaimer,
    {
      opacity: animatedDisclaimerValue,
      transform: [
        {
          translateY: animatedDisclaimerValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-15, 0],
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

      <View style={styles.wrapper}>
        <ScrollView style={{ height }}>
          <View
            style={[
              styles.root,
              {
                minHeight: height,
              },
            ]}>
            <View style={styles.contentWrapper}>
              <View style={styles.sliderWrapper}>
                <Row>
                  <Col>
                    <WelcomeSlider
                      ref={slider}
                      onSlideChanged={(index, isLastSlide) => {
                        setIsLastSlide(isLastSlide);
                        animateDisclaimer(isLastSlide ? 1 : 0);
                      }}
                    />
                  </Col>
                </Row>
              </View>

              <View style={styles.controlsWrapper}>
                <Animated.View style={disclaimerStyles} pointerEvents={isLastSlide ? 'auto' : 'none'}>
                  <Row>
                    <Col>
                      <Text style={[STYLES.FADED_TEXT, STYLES.CENTERED_TEXT]}>
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
                    </Col>
                  </Row>
                </Animated.View>

                {isLastSlide ? (
                  <Row>
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
                  <Row>
                    <Col>
                      <CustomButton
                        theme='default'
                        text={localizeText('Button::NextWelcomeSlide')}
                        onPress={handleNextSlide}
                      />
                    </Col>
                  </Row>
                )}
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

  contentWrapper: {
    flex: 1,
  },

  sliderWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  controlsWrapper: {
    paddingHorizontal: PADDING.LARGE,
  },

  disclaimer: {},

  wrapper: {
    flex: 1,
  },
});
