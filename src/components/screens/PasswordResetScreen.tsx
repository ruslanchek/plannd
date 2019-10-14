import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native';
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

export interface ISettingsScreenParams {}

const { width, height } = Dimensions.get('window');

export const PasswordResetScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <BgTint>
      <ScrollView style={[styles.root, { width, height }]}>
        <KeyboardAvoidingView behavior='position' enabled>
          <Row>
            <Col>
              <Text style={STYLES.H1}>{localizeText('Header::PasswordReset')}</Text>
            </Col>
          </Row>

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
                onChange={event => {
                  setEmail(event.nativeEvent.text);
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col>
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
            </Col>
          </Row>
        </KeyboardAvoidingView>
      </ScrollView>
    </BgTint>
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
