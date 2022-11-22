import { styled, keyframes } from '../stitches.config';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const LoadingSpinner = styled('span', {
  border: `solid $colors$gray200`,
  borderTopColor: `$colors$gray600`,
  borderRadius: '50%',

  animation: `${spin} 1s linear infinite`,

  variants: {
    size: {
      sm: {
        sq: '$4',
        borderWidth: '3px'
      },
      md: {
        sq: '$6',
        borderWidth: '4px'
      },
      lg: {
        sq: '$7',
        borderWidth: '5px'
      }
    }
  }
});
