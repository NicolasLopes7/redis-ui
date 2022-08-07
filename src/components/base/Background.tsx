import { styled } from '@stitches/react';

export const Background = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$bg',
  padding: '8px',
  color: '$white',
  width: '100%',
  minHeight: '100vh'
});
