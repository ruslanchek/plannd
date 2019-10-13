import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleRegister } from '../../helpers/authHelpers';
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

export interface ISettingsScreenParams {}

export const RegisterScreen: React.FC<
  NavigationSwitchScreenProps<ISettingsScreenParams>
> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ModalShadow>
      <BgTint>
        <View style={styles.root}>
          <Row>
            <TextInput
              numberOfLines={1}
              placeholder={localizeText('InputPlaceholder::Email')}
              placeholderTextColor={COLORS.TEXT_PLACEHOLDER.toString()}
              textContentType='emailAddress'
              style={STYLES.INPUT}
              value={email}
              onChange={event => {
                setEmail(event.nativeEvent.text);
              }}
            />
          </Row>

          <Row>
            <TextInput
              numberOfLines={1}
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
          </Row>

          <Row>
            <CustomButton
              theme='accent'
              text={localizeText('Button::Register')}
              onPress={() => authHandleRegister(email, password)}
            />
          </Row>

          <Row>
            <SocialOr />
          </Row>

          <Row>
            <CustomButton
              theme='facebook'
              text={localizeText('Button::FacebookRegister')}
              onPress={() => {}}
              icon={<Icon name='facebook' size={26} color={COLORS.FACEBOOK.toString()} />}
            />
          </Row>

          <Row>
            <CustomButton
              theme='twitter'
              text={localizeText('Button::TwitterRegister')}
              onPress={() => {}}
              icon={<Icon name='twitter' size={26} color={COLORS.TWITTER.toString()} />}
            />
          </Row>
        </View>
      </BgTint>
    </ModalShadow>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
    flex: 1,
  },
});
