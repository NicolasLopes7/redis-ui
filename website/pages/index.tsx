import React from 'react';
import { useConnectionsProvider } from '../contexts/ConnectionsProvider';
import { FirstConnectionWizard } from '@redis-ui/connections';

export function InitialPage() {
  const { hasConnections } = useConnectionsProvider();
  if (!hasConnections) {
    return <FirstConnectionWizard />;
  }

  return null;
}
