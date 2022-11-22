import { styled } from '../stitches.config';

export const Background = styled('div', {
  display: 'flex',
  background: '$gray50',
  color: '$gray900',
  width: '100%',
  minHeight: '100vh',

  variants: {
    centered: {
      true: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      false: {}
    }
  },

  defaultVariants: {
    centered: false
  }
});
