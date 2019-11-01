import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { BORDER_RADIUS, ELEMENT_SIZES, PADDING, FONT_SIZES, SHADOWS, FONT_FAMILY } from './constants';

export const STYLES = StyleSheet.create({
  INPUT: {
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderRadius: BORDER_RADIUS.MEDIUM,
    height: ELEMENT_SIZES.INPUT_HEIGHT,
    paddingHorizontal: PADDING.REGULAR,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.TEXT.toString(),
    fontFamily: FONT_FAMILY.REGULAR,
    ...SHADOWS.ELEVATION_1,
  },

  H1: {
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    lineHeight: FONT_SIZES.LARGE * 1.15,
    color: COLORS.TEXT.toString(),
  },

  H3: {
    fontSize: FONT_SIZES.SEMI_LARGE,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: FONT_SIZES.MEDIUM * 1.5,
    color: COLORS.TEXT.toString(),
  },

  CENTERED: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  TEXT: {
    color: COLORS.TEXT.toString(),
    fontFamily: FONT_FAMILY.REGULAR,
  },

  FADED_TEXT: {
    color: COLORS.TEXT_FADED.toString(),
    fontFamily: FONT_FAMILY.REGULAR,
  },

  CENTERED_TEXT: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.REGULAR,
  },

  SUBTITLE: {
    fontSize: FONT_SIZES.REGULAR,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.TEXT_FADED.toString(),
  },
});
