import { createStitches } from '@stitches/react';

export const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      bg: '#212121',
      bg50: '#2C2C2C',
      bg100: '#333333',
      bg200: '#3F3F3F',

      white: '#FFFFFF',

      black: '#000000',
      black50: '#111',
      black100: '#191919',
      black200: '#202020',
      black300: '#282828',

      text: '#fff',
      text100: '#eee',
      text200: '#ddd'
    },
    fonts: {
      sans: 'Roboto, sans-serif'
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px'
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
  }
});
