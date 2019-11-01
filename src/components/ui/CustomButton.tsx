import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { FONT_SIZES, BORDER_RADIUS, ELEMENT_SIZES, PADDING, FONT_FAMILY, SHADOWS } from '../../common/constants';

interface IProps {
  theme: 'default' | 'accent' | 'facebook' | 'twitter' | 'google';
  text: string;
  onPress: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const UNDERLAY_COLORS = {
  accent: COLORS.ACCENT.darken(0.1).toString(),
  default: COLORS.ACCENT.alpha(0.1).toString(),
  facebook: COLORS.FACEBOOK.alpha(0.1).toString(),
  twitter: COLORS.TWITTER.alpha(0.1).toString(),
  google: COLORS.GOOGLE.alpha(0.1).toString(),
};

export const CustomButton: React.FC<IProps> = props => {
  const { theme, text, onPress, icon, disabled } = props;

  return (
    <TouchableHighlight
      style={[styles.root, [themedRootStyles[theme]]]}
      onPress={onPress}
      disabled={disabled}
      underlayColor={UNDERLAY_COLORS[theme]}>
      <View style={styles.inner}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={[styles.text, themedTextStyles[theme]]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const themedTextStyles = StyleSheet.create({
  accent: {
    color: COLORS.BG_CONTRAST.toString(),
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

  google: {
    color: COLORS.GOOGLE.toString(),
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
    backgroundColor: COLORS.FACEBOOK.alpha(0).toString(),
    borderColor: COLORS.FACEBOOK.alpha(1).toString(),
    borderWidth: 1,
  },

  twitter: {
    backgroundColor: COLORS.TWITTER.alpha(0).toString(),
    borderColor: COLORS.TWITTER.alpha(1).toString(),
    borderWidth: 1,
  },

  google: {
    backgroundColor: COLORS.GOOGLE.alpha(0).toString(),
    borderColor: COLORS.GOOGLE.alpha(1).toString(),
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  root: {
    borderRadius: BORDER_RADIUS.MEDIUM,
  },

  inner: {
    height: ELEMENT_SIZES.BUTTON_HEIGHT,
    paddingHorizontal: PADDING.MEDIUM,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONT_FAMILY.REGULAR,
  },

  icon: {
    marginRight: PADDING.SMALL,
    position: 'absolute',
    left: PADDING.MEDIUM,
  },
});
