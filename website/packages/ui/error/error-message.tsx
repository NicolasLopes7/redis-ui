// export const ErrorMessage

import { CrossCircledIcon } from '@radix-ui/react-icons';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../base';
import { styled } from '../stitches.config';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '$3'
});

const ErrorText = styled('p', {
  color: '$red400',
  fontWeight: 'bold',
  fontSize: '$lg'
});

const ErrorIcon = styled(CrossCircledIcon, {
  sq: '$5',
  fontSIze: '$lg',
  color: '$red400'
});

export function ErrorMessage({ children = 'Oops, something went wrong...' }: PropsWithChildren) {
  const navigate = useNavigate();

  return (
    <Container>
      <ErrorIcon />
      <ErrorText>{children}</ErrorText>
      <Button onClick={() => navigate(-1)} size="sm" css={{ mt: '$4', px: '$8' }}>
        Go back
      </Button>
    </Container>
  );
}
