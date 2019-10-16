import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { BORDER_RADIUS, ELEMENT_SIZES, PADDING, FONT_SIZES, SHADOWS } from './constants';

export const STYLES = StyleSheet.create({
  INPUT: {
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderRadius: BORDER_RADIUS.MEDIUM,
    height: ELEMENT_SIZES.INPUT_HEIGHT,
    paddingHorizontal: PADDING.REGULAR,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.TEXT.toString(),
    fontWeight: '600',
    ...SHADOWS.ELEVATION_1,
  },

  SMALL_BUTTON: {
    fontSize: FONT_SIZES.SMALL,
  },

  H1: {
    fontSize: FONT_SIZES.LARGE,
    fontWeight: '800',
    color: COLORS.TEXT.toString(),
  },

  CENTERED: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  TEXT: {
    color: COLORS.TEXT.toString(),
  },

  FADED_TEXT: {
    color: COLORS.TEXT_FADED.toString(),
  },

  CENTERED_TEXT: {
    textAlign: 'center',
  },

  SUBTITLE: {
    fontSize: FONT_SIZES.REGULAR,
    color: COLORS.TEXT_FADED.toString(),
  },
});
