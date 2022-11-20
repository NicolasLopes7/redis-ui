import React, { PropsWithChildren } from 'react';
import { InspectedConnectionProvider } from './InspectedConnection';

export function RootProvider({ children }: PropsWithChildren) {
  return <InspectedConnectionProvider>{children}</InspectedConnectionProvider>;
}
