import React from 'react';
import { NewConnectionCard, useSavedConnections } from '@redis-ui/connections';

export function InitialPage() {
  const { hasSavedConnections } = useSavedConnections();
  if (!hasSavedConnections) {
    return <NewConnectionCard />;
  }

  return null;
}
