import { styled } from '../stitches.config';

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  border: 'none',

  transition: 'background-color 100ms ease-in-out',

  color: '$gray900',
  backgroundColor: '$gray200',

  '&:hover': {
    backgroundColor: '$gray300'
  },

  '&:active': {
    backgroundColor: '$gray400'
  },

  borderRadius: '6px',

  variants: {
    kind: {
      primary: {},
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $colors$gray900',

        '&:hover': {
          backgroundColor: '$aGray100'
        },

        '&:focus': {
          backgroundColor: '$aGray200'
        }
      }
    },
    size: {
      sm: {
        p: '8px 20px',
        fontSize: '$sm'
      },
      md: {
        p: '12px 20px',
        borderRadius: '6px',
        fontSize: '$md'
      }
    }
  },
  defaultVariants: {
    kind: 'md',
    type: 'primary'
  }
});
