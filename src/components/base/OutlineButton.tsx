import { styled } from '../../stitches.config';

export const OutlineButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '12px 20px',
  borderRadius: '6px',
  fontSize: '$md',

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
  }
});
