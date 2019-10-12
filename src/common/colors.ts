import Color from 'color';

interface IColors {
  ELEMENT_BG: Color;
  ELEMENT_STROKE: Color;

  TEXT: Color;
  TEXT_FADED: Color;
}

export const THEME_LIGHT: IColors = {
  ELEMENT_BG: Color('#fff'),
  ELEMENT_STROKE: Color('#F1F1F6'),

  TEXT: Color('#25245A'),
  TEXT_FADED: Color('#9393AD'),
};

export let COLORS: IColors = THEME_LIGHT;
