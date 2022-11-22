import React, { PropsWithChildren } from 'react';
import { Background } from '../layout';
import { ErrorMessage } from './error-message';

export function ErrorScreen({ children }: PropsWithChildren) {
  return (
    <Background centered>
      <ErrorMessage>{children}</ErrorMessage>
    </Background>
  );
}
