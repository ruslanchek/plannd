import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_SIZES, BORDER_RADIUS } from '../../common/constants';

interface IProps {
  theme: 'default' | 'accent';
  text: string;
  onPress: () => void;
}

export const CustomButton: React.FC<IProps> = props => {
  const { theme, text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.root, themedRootStyles[theme]]}>
        <Text style={[styles.text, themedTextStyles[theme]]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const themedTextStyles = StyleSheet.create({
  accent: {
    color: COLORS.WHITE.toString(),
  },

  default: {
    color: COLORS.ACCENT.toString(),
  },
});

const themedRootStyles = StyleSheet.create({
  accent: {
    backgroundColor: COLORS.ACCENT.toString(),
  },

  default: {
    borderColor: COLORS.ACCENT.toString(),
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  root: {
    height: 48,
    paddingHorizontal: 20,
    borderRadius: BORDER_RADIUS.LARGE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: '600',
  },
});
