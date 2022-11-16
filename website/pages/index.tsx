import React from 'react';
import { useConnectionsProvider } from '../contexts/ConnectionsProvider';
import { NewConnectionCard } from '@redis-ui/connections';

export function InitialPage() {
  const { hasConnections } = useConnectionsProvider();
  if (!hasConnections) {
    return <NewConnectionCard />;
  }

  return null;
}
