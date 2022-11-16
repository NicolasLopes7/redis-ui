import React, { PropsWithChildren } from 'react';
import { SavedConnectionsProvider } from './SavedConnections';

export function RootProvider({ children }: PropsWithChildren<{}>) {
  return <SavedConnectionsProvider>{children}</SavedConnectionsProvider>;
}
