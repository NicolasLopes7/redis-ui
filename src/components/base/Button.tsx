import { styled } from '../../stitches.config';

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  border: 'none',

  transition: 'background-color 100ms ease-in-out',

  color: '$white',
  backgroundColor: '$black100',

  '&:hover': {
    backgroundColor: '$black200'
  },

  '&:active': {
    backgroundColor: '$black300'
  },

  borderRadius: '6px',

  variants: {
    size: {
      sm: {
        padding: '6px 12px',
        fontSize: '$sm'
      },
      md: {
        padding: '12px 20px',
        borderRadius: '6px',
        fontSize: '$md'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});
