import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Dimensions, View, Image } from 'react-native';
import { NavigationSwitchScreenProps, ScrollView } from 'react-navigation';
import { authHandleResetPassword } from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { Col } from '../ui/Col';
import { useScreenSizes } from '../../hooks/useScreenSizes';
import { Header } from '../ui/Header';
import { NextButtonIcon } from '../ui/NextButtonIcon';

export interface IPasswordResetScreenParams {}

const { width, height } = Dimensions.get('window');

export const PasswordResetScreen: React.FC<NavigationSwitchScreenProps<IPasswordResetScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { height, paddingBottom, paddingTop } = useScreenSizes();

  const handleSubmit = async () => {
    setLoading(true);
    await authHandleResetPassword(email);
    setLoading(false);
  };

  return (
    <BgTint>
      <View style={styles.root}>
        <View
          style={{
            height,
            paddingBottom,
            paddingTop,
          }}>
          <View style={styles.top}>
            <Header
              navigation={navigation}
              title={localizeText('Title::PasswordReset')}
              subtitle={localizeText('Subtitle::PasswordReset')}
            />
          </View>

          <View style={styles.mid}>
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
                  style={[STYLES.INPUT, STYLES.INPUT_EFFECTS]}
                  value={email}
                  onChange={event => {
                    setEmail(event.nativeEvent.text);
                  }}
                  onSubmitEditing={handleSubmit}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomButton
                  disabled={loading}
                  theme='accent'
                  text={localizeText('Button::Continue')}
                  icon={<NextButtonIcon />}
                  iconPosition='end'
                  onPress={handleSubmit}
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

  top: {},

  mid: {
    padding: PADDING.LARGE,
    flexGrow: 1,
    justifyContent: 'center',
  },

  centerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  contentWrapper: {
    paddingVertical: PADDING.LARGE,
    justifyContent: 'flex-start',
    flex: 1,
  },
});
