import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { BORDER_RADIUS, ELEMENT_SIZES, PADDING, FONT_SIZES } from './constants';

export const STYLES = StyleSheet.create({
  INPUT: {
    backgroundColor: COLORS.ELEMENT_BG.toString(),
    borderRadius: BORDER_RADIUS.MEDIUM,
    height: ELEMENT_SIZES.INPUT_HEIGHT,
    paddingHorizontal: PADDING.REGULAR,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.TEXT.toString(),
    fontWeight: '600',
    shadowColor: COLORS.TEXT_FADED.toString(),
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
});