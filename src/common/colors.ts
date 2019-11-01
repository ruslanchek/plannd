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
  TEXT_PLACEHOLDER: Color;

  ACCENT: Color;

  FACEBOOK: Color;
  TWITTER: Color;
  GOOGLE: Color;
}

export const THEME_LIGHT: IColors = {
  BG_CONTRAST: Color('#FFFFFF'),
  BG: Color('#FFFFFF'),
  BG_TINT: Color('#F6F9FE'),

  ELEMENT_BG: Color('#FFFFFF'),
  ELEMENT_IDLE: Color('#EFF0F1'),
  ELEMENT_STROKE: Color('#F1F1F6'),

  TEXT: Color('#0D0D0D'),
  TEXT_FADED: Color('#9294AC'),
  TEXT_PLACEHOLDER: Color('#B8BAC8'),

  ACCENT: Color('#4B69FF'),

  FACEBOOK: Color('#1977F3'),
  TWITTER: Color('#1DA1F2'),
  GOOGLE: Color('#C9CFE5'),
};

export let COLORS: IColors = THEME_LIGHT;
