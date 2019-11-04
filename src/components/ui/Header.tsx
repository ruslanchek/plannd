import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { PADDING } from '../../common/constants';
import { COLORS } from '../../common/colors';
import { STYLES } from '../../common/styles';
import { NavigationSwitchProp } from 'react-navigation';

interface IProps {
  title: string;
  subtitle: string;
  navigation: NavigationSwitchProp;
}

export const Header: React.FC<IProps> = props => {
  const { title, subtitle, navigation } = props;

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Icon name='arrowleft' size={28} color={COLORS.ACCENT.toString()} />
      </TouchableOpacity>

      <Text style={STYLES.H2}>{title}</Text>
      <Text style={[STYLES.FADED_TEXT, STYLES.CENTERED_TEXT]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: PADDING.LARGE,
    paddingTop: PADDING.SMALL,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    left: PADDING.LARGE,
    top: 12,
    position: 'absolute',
  },
});
