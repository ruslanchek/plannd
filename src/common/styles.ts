import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { BORDER_RADIUS, ELEMENT_SIZES, PADDING, FONT_SIZES, FONT_FAMILY, LINE_HEIGHTS } from './constants';

export const SHADOWS = StyleSheet.create({
  ELEVATION_1_REVERSED: {
    shadowColor: COLORS.ACCENT.toString(),
    shadowOpacity: 0.075,
    shadowRadius: 5,
    shadowOffset: {
      height: -5,
      width: 0,
    },
  },

  ELEVATION_1: {
    shadowColor: COLORS.ACCENT.toString(),
    shadowOpacity: 0.075,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },

  ELEVATION_2: {
    shadowColor: COLORS.ACCENT.toString(),
    shadowOpacity: 0.075,
    shadowRadius: 4,
    shadowOffset: {
      height: 6,
      width: 0,
    },
  },

  ELEVATION_3: {
    shadowColor: COLORS.ACCENT.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      height: 4,
      width: 0,
    },
  },

  ELEVATION_4: {
    shadowColor: COLORS.ACCENT.toString(),
    shadowOpacity: 0.32,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 0,
    },
  },
});

export const STYLES = StyleSheet.create({
  INPUT: {
    height: ELEMENT_SIZES.INPUT_HEIGHT,
    paddingHorizontal: PADDING.MEDIUM,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.TEXT.toString(),
    fontFamily: FONT_FAMILY.REGULAR,
  },

  INPUT_SEPARATOR_BOTTOM: {
    borderBottomColor: COLORS.ELEMENT_STROKE.toString(),
    borderBottomWidth: 2,
  },

  INPUT_EFFECTS: {
    borderRadius: BORDER_RADIUS.MEDIUM,
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    ...SHADOWS.ELEVATION_3,
  },

  H1: {
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    lineHeight: FONT_SIZES.LARGE * LINE_HEIGHTS.HEADER,
    color: COLORS.TEXT.toString(),
  },

  H2: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    lineHeight: FONT_SIZES.LARGE * LINE_HEIGHTS.HEADER,
    color: COLORS.TEXT.toString(),
  },

  H3: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: FONT_SIZES.MEDIUM * LINE_HEIGHTS.HEADER,
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
    fontSize: FONT_SIZES.REGULAR,
  },

  SMALL_TEXT: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.SMALL,
  },

  CENTERED_TEXT: {
    color: COLORS.TEXT.toString(),
    textAlign: 'center',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.SMALL,
    lineHeight: FONT_SIZES.REGULAR * LINE_HEIGHTS.TEXT,
  },

  SUBTITLE: {
    fontSize: FONT_SIZES.REGULAR,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.TEXT_FADED.toString(),
  },
});
