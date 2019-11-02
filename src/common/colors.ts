import Color from 'color';

interface IColors {
  BG_CONTRAST: Color;

  BG: Color;
  BG_TINT: Color;

  ELEMENT_BG: Color;
  ELEMENT_IDLE: Color;
  ELEMENT_STROKE: Color;

  TEXT: Color;
  TEXT_FADED: Color;
  TEXT_TINT: Color;
  TEXT_PLACEHOLDER: Color;

  ACCENT: Color;

  FACEBOOK: Color;
  TWITTER: Color;
  GOOGLE: Color;
}

export const THEME_LIGHT: IColors = {
  BG_CONTRAST: Color('#FFFFFF'),
  BG: Color('#F3F5F9'),
  BG_TINT: Color('#F6F9FE'),

  ELEMENT_BG: Color('#FFFFFF'),
  ELEMENT_IDLE: Color('#EFF0F1'),
  ELEMENT_STROKE: Color('#F4F7FB'),

  TEXT: Color('#384354'),
  TEXT_FADED: Color('#606B78'),
  TEXT_TINT: Color('#9AA1A9'),
  TEXT_PLACEHOLDER: Color('#C5C9CE'),

  ACCENT: Color('#566CF6'),

  FACEBOOK: Color('#1977F3'),
  TWITTER: Color('#1DA1F2'),
  GOOGLE: Color('#C9CFE5'),
};

export let COLORS: IColors = THEME_LIGHT;
