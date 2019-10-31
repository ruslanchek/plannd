import Color from 'color';

interface IColors {
  BG_CONTRAST: Color;

  BG_TINT: Color;

  ELEMENT_BG: Color;
  ELEMENT_IDLE: Color;
  ELEMENT_STROKE: Color;

  TEXT: Color;
  TEXT_FADED: Color;
  TEXT_PLACEHOLDER: Color;

  ACCENT: Color;

  FACEBOOK: Color;
  TWITTER: Color;
  GOOGLE: Color;
}

export const THEME_LIGHT: IColors = {
  BG_CONTRAST: Color('#FFFFFF'),
  BG_TINT: Color('#F9FAFB'),

  ELEMENT_BG: Color('#FFFFFF'),
  ELEMENT_IDLE: Color('#EFF0F1'),
  ELEMENT_STROKE: Color('#F1F1F6'),

  TEXT: Color('#262953'),
  TEXT_FADED: Color('#9294AC'),
  TEXT_PLACEHOLDER: Color('#B8BAC8'),

  ACCENT: Color('#2374FE'),

  FACEBOOK: Color('#1977F3'),
  TWITTER: Color('#1DA1F2'),
  GOOGLE: Color('#767676'),
};

export let COLORS: IColors = THEME_LIGHT;
