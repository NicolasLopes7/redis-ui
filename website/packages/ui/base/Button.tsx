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

        '&:hover': {
          backgroundColor: '$aGray100'
        },

        '&:active': {
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
    size: 'md',
    kind: 'primary'
  }
});
