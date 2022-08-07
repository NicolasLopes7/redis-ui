import { styled } from '../../stitches.config';

export const TextInput = styled('input', {
  fontSize: '$md',
  padding: '12px 20px',
  border: 'none',
  outline: 'none',
  borderRadius: '6px',
  background: '$black100',
  color: '$white',
  '&::placeholder': {
    color: '$text200'
  }
});
