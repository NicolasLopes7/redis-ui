import { Connection } from '@redis-ui/connections';
import React, { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';
import { buildConnectionURL } from '../../../lib/connection-url';

export type KeysResponse = {
  key: string;
  type: 'string' | 'number';
  value: string;
};

type InspectedConnectionData = {
  connection?: Connection;
  connectionURL?: string;

  inspectConnection: (connection: Connection) => void;
  disconnect: () => void;
};

const InspectedConnectionContext = createContext<InspectedConnectionData | null>(null);

export function InspectedConnectionProvider({ children }: PropsWithChildren) {
  const [connection, setConnection] = useState<Connection>();
  const connectionURL = useMemo(() => {
    if (!connection) return undefined;

    return buildConnectionURL(connection);
  }, [connection]);

  const disconnect = useCallback(() => {
    setConnection(undefined);
  }, []);

  return (
    <InspectedConnectionContext.Provider
      value={{
        connection,
        connectionURL,
        disconnect,
        inspectConnection: setConnection
      }}
    >
      {children}
    </InspectedConnectionContext.Provider>
  );
}

export const useInspectedConnection = () => {
  const context = useContext(InspectedConnectionContext);

  if (!context) {
    throw new Error('UseInspectedConnection must be called within a InspectedConnectionProvider ');
  }

  return context;
};
