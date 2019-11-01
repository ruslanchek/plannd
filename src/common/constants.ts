import { COLORS } from './colors';

export const ELEMENT_SIZES = {
  TAB_BAR_HEIGHT: 56,
  TAB_BAR_ICON_SIZE: 24,
  INPUT_HEIGHT: 48,
  BUTTON_HEIGHT: 48,
};

export const FONT_SIZES = {
  LARGE: 24,
  SEMI_LARGE: 20,
  MEDIUM: 16,
  REGULAR: 14,
  SMALL: 12,
  TINY: 10,
};

export const FONT_FAMILY = {
  BOLD: 'Rubik-Bold',
  EXTRA_BOLD: 'Rubik-Black',
  REGULAR: 'Rubik-Regular',
  SEMI_BOLD: 'Rubik-Medium',
};

export const ASYNC_STORAGE_KEYS = {
  UID: 'uid',
};

export const BORDER_RADIUS = {
  SMALL: 4,
  REGULAR: 6,
  MEDIUM: 12,
  LARGE: 16,
};

export const PADDING = {
  TINY: 4,
  SMALL: 10,
  REGULAR: 16,
  MEDIUM: 20,
  LARGE: 30,
};

export const SHADOWS = {
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
    shadowRadius: 6,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
};
