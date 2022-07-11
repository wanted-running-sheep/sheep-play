import media from './media';
import { dropDownAnimation } from './animation';

const color = {
  background: {
    primary: '#292C3D',
    indigo: '#2E3142',
    darkgray: '#606376A6',
    white: '#FFFFFF',
  },
  font: {
    white: '#FFFFFF',
    gray: '#81838E',
  },
  border: {
    lightblue: '#9896FF',
  },
};

export const theme = {
  color,
  media,
  dropDownAnimation,
};
export type Theme = typeof theme;
