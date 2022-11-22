import React from 'react';
import { Background } from '../layout';
import { LoadingSpinner } from './Spinner';

export function LoadingScreen() {
  return (
    <Background centered>
      <LoadingSpinner size="lg" />
    </Background>
  );
}
