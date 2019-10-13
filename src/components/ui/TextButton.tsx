import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_SIZES } from '../../common/constants';
import { COLORS } from '../../common/colors';

interface IProps {
  text: string;
  onPress: () => void;
}

export const TextButton: React.FC<IProps> = props => {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZES.REGULAR,
    fontWeight: '400',
    color: COLORS.ACCENT.toString(),
  },
});
