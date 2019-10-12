import Color from 'color';

interface IColors {
  WHITE: Color;

  TINT_BG: Color;

  ELEMENT_BG: Color;
  ELEMENT_IDLE: Color;
  ELEMENT_STROKE: Color;

  TEXT: Color;
  TEXT_FADED: Color;
  TEXT_PLACEHOLDER: Color;

  ACCENT: Color;
}

export const THEME_LIGHT: IColors = {
  WHITE: Color('#fff'),

  TINT_BG: Color('#F9FAFB'),

  ELEMENT_BG: Color('#fff'),
  ELEMENT_IDLE: Color('#EFF0F1'),
  ELEMENT_STROKE: Color('#F1F1F6'),

  TEXT: Color('#262953'),
  TEXT_FADED: Color('#9597AB'),
  TEXT_PLACEHOLDER: Color('#B8BAC8'),

  ACCENT: Color('#3876F6'),
};

export let COLORS: IColors = THEME_LIGHT;
