import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_SIZES, FONT_FAMILY } from '../../common/constants';
import { COLORS } from '../../common/colors';

interface IProps {
  text: string;
  onPress: () => void;
  faded?: boolean;
}

export const TextButton: React.FC<IProps> = props => {
  const { text, onPress, faded } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, faded ? styles.faded : null]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZES.SMALL,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    textTransform: 'uppercase',
    color: COLORS.ACCENT.toString(),
  },

  faded: {
    color: COLORS.TEXT_TINT.toString(),
  },
});
