import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_SIZES, BORDER_RADIUS, ELEMENT_SIZES, PADDING } from '../../common/constants';

interface IProps {
  theme: 'default' | 'accent' | 'facebook' | 'twitter';
  text: string;
  onPress: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const CustomButton: React.FC<IProps> = props => {
  const { theme, text, onPress, icon, disabled } = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.root, themedRootStyles[theme]]}>
        {icon && <View style={styles.icon}>{icon}</View>}
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

  facebook: {
    color: COLORS.FACEBOOK.toString(),
  },

  twitter: {
    color: COLORS.TWITTER.toString(),
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

  facebook: {
    backgroundColor: COLORS.FACEBOOK.alpha(0.125).toString(),
  },

  twitter: {
    backgroundColor: COLORS.TWITTER.alpha(0.125).toString(),
  },
});

const styles = StyleSheet.create({
  root: {
    height: ELEMENT_SIZES.BUTTON_HEIGHT,
    paddingHorizontal: PADDING.MEDUIM,
    borderRadius: BORDER_RADIUS.MEDIUM,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: '600',
  },

  icon: {
    marginRight: PADDING.SMALL,
  },
});
