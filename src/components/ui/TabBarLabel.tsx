import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../common/colors';
import { FONT_SIZES } from '../../common/constants';
import { localizeText } from '../../helpers/localeHelpers';

interface IProps {
  routeName: string;
  tintColor: string;
}

export const TabBarLabel: React.FC<IProps> = props => {
  const { tintColor, routeName } = props;

  return (
    <Text style={[styles.root, { color: tintColor }]}>{localizeText(`TabBar::${routeName}`)}</Text>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: FONT_SIZES.TINY,
    marginTop: 4,
  },
});
