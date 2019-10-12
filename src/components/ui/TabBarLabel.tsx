import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../common/colors';
import { FONT_SIZES } from '../../common/constants';
import { localizeText } from '../../helpers/localeHelpers';

interface IProps {
  focused: boolean;
  routeName: string;
  tintColor?: string;
  horizontal?: boolean;
}

export const TabBarLabel: React.FC<IProps> = props => {
  const { focused, routeName } = props;

  return (
    <Text style={[styles.root, focused ? styles.rootFocused : null]}>
      {localizeText(`TabBar::${routeName}`)}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    color: COLORS.TEXT_FADED.toString(),
    fontSize: FONT_SIZES.TINY,
  },

  rootFocused: {
    color: COLORS.ACCENT.toString(),
  },
});
