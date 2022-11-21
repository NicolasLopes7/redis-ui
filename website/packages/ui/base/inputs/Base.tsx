import { styled } from '../../stitches.config';

export const BaseInput = styled('input', {
  fontSize: '$md',
  p: '12px 20px',
  border: 'none',
  borderRadius: '6px',
  background: '$gray200',
  color: '$gray800',

  '&::placeholder': {
    color: '$gray700',
    fontSize: '$sm'
  }
});

export type BaseInputProps = React.ComponentPropsWithRef<typeof BaseInput>;
