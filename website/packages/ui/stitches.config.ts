import { createStitches, CSS as StitchesCSS } from '@stitches/react';

export const { styled, theme, keyframes } = createStitches({
  theme: {
    colors: {
      gray50: 'hsl(230, 5%, 5%)',
      gray100: 'hsl(230, 5%, 10%)',
      gray200: 'hsl(230, 5%, 15%)',
      gray300: 'hsl(230, 5%, 20%)',
      gray400: 'hsl(230, 5%, 25%)',
      gray500: 'hsl(230, 5%, 30%)',
      gray600: 'hsl(230, 5%, 50%)',
      gray700: 'hsl(230, 5%, 70%)',
      gray800: 'hsl(230, 5%, 90%)',
      gray900: 'hsl(230, 5%, 100%)'
    },
    fonts: {
      sans: 'Roboto, sans-serif'
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px'
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
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

export type CSS = StitchesCSS<{ theme: typeof theme }>;
