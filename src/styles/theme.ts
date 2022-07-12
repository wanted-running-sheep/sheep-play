import media from './media';
import mixins from './mixins';
import animation from './animation';

const color = {
  background: {
    primary: '#292C3D',
    indigo: '#2E3142',
    darkgray: '#606376A6',
    white: '#FFFFFF',
    yellow: '#ffff00',
  },
  font: {
    white: '#FFFFFF',
    lightgray: '#C3C3C3',
    gray: '#81838E',
  },
  border: {
    white: '#FFFFFF',
    lightgray: '#C3C3C3',
    lightblue: '#9896FF',
  },
};

const zIndex = {
  modalLevel: 500,
};

export const theme = {
  color,
  media,
  mixins,
  zIndex,
  animation,
};
export type Theme = typeof theme;
