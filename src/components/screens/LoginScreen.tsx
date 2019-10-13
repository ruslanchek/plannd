import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';
import { authHandleLogIn } from '../../helpers/authHelpers';
import { CustomButton } from '../ui/CustomButton';
import { PADDING } from '../../common/constants';
import { Row } from '../ui/Row';
import { localizeText } from '../../helpers/localeHelpers';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { BgTint } from '../ui/BgTint';
import { SocialOr } from '../ui/SocialOr';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Routes } from '../../common/routes';
import { ModalShadow } from '../ui/ModalShadow';
import { TextButton } from '../ui/TextButton';

export interface ISettingsScreenParams {}

export const LoginScreen: React.FC<NavigationSwitchScreenProps<ISettingsScreenParams>> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ModalShadow>
      <BgTint>
        <ScrollView style={styles.root} contentContainerStyle={styles.rootScroll}>
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
              text={localizeText('Button::Login')}
              onPress={() => authHandleLogIn(email, password)}
            />
          </Row>

          <Row>
            <View style={styles.centerButton}>
              <TextButton onPress={() => {}} text={localizeText('Button::ResetPassword')} />
            </View>
          </Row>

          <Row>
            <SocialOr />
          </Row>

          <Row>
            <CustomButton
              theme='facebook'
              text={localizeText('Button::FacebookLogin')}
              onPress={() => {}}
              icon={<Icon name='facebook' size={26} color={COLORS.FACEBOOK.toString()} />}
            />
          </Row>

          <Row>
            <CustomButton
              theme='twitter'
              text={localizeText('Button::TwitterLogin')}
              onPress={() => {}}
              icon={<Icon name='twitter' size={26} color={COLORS.TWITTER.toString()} />}
            />
          </Row>
        </ScrollView>
      </BgTint>
    </ModalShadow>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: PADDING.MEDUIM,
  },
  rootScroll: {},
  centerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
