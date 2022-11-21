import { styled } from '../../stitches.config';

export const BaseInput = styled('input', {
  fontSize: '$md',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '6px',
  background: '$black100',
  color: '$white',
  '&::placeholder': {
    color: '$text200',
    fontSize: '$sm'
  }
});

export type BaseInputProps = React.ComponentPropsWithRef<typeof BaseInput>;
