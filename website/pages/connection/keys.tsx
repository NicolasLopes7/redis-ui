import { useKeys } from '@redis-ui/inspector/hooks/useKeys';
import { Background, LoadingScreen } from '@redis-ui/ui';
import { ErrorScreen } from '@redis-ui/ui/error/ErrorScreen';
import React from 'react';

export function KeysPage() {
  const { isError, isLoading, data, error } = useKeys();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen />;

  return <Background>Table goes here...</Background>;
}
