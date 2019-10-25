import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import {
  BORDER_RADIUS,
  ELEMENT_SIZES,
  PADDING,
  FONT_SIZES,
  SHADOWS,
  FONT_FAMILY,
} from './constants';

export const STYLES = StyleSheet.create({
  INPUT: {
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderRadius: BORDER_RADIUS.MEDIUM,
    height: ELEMENT_SIZES.INPUT_HEIGHT,
    paddingHorizontal: PADDING.REGULAR,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.TEXT.toString(),
    fontFamily: FONT_FAMILY.BOLD,
    ...SHADOWS.ELEVATION_1,
  },

  SMALL_BUTTON: {
    fontSize: FONT_SIZES.SMALL,
  },

  H1: {
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    lineHeight: FONT_SIZES.LARGE * 1.2,
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
  },

  SUBTITLE: {
    fontSize: FONT_SIZES.REGULAR,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.TEXT_FADED.toString(),
  },
});
