import { COLORS } from './colors';

export const ELEMENT_SIZES = {
  TAB_BAR_HEIGHT: 56,
  TAB_BAR_ICON_SIZE: 24,
  INPUT_HEIGHT: 48,
  BUTTON_HEIGHT: 48,
};

export const FONT_SIZES = {
  LARGE: 28,
  SEMI_LARGE: 22,
  MEDIUM: 16,
  REGULAR: 14,
  SMALL: 12,
  TINY: 10,
};

export const FONT_FAMILY = {
  MONO_BOLD: 'RobotoMono-Bold',
  MONO_REGULAR: 'RobotoMono-Regular',
  MONO_MEDIUM: 'RobotoMono-Medium',
};

export const ASYNC_STORAGE_KEYS = {
  UID: 'uid',
};

export const BORDER_RADIUS = {
  SMALL: 4,
  REGULAR: 6,
  MEDIUM: 10,
  LARGE: 14,
};

export const PADDING = {
  SMALL: 10,
  REGULAR: 16,
  MEDUIM: 20,
  LARGE: 30,
};

export const SHADOWS = {
  ELEVATION_1_REVERSED: {
    shadowColor: COLORS.TEXT_FADED.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -5,
      width: 0,
    },
  },

  ELEVATION_1: {
    shadowColor: COLORS.TEXT_FADED.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },

  ELEVATION_2: {
    shadowColor: COLORS.TEXT_FADED.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 0,
    },
  },
};
