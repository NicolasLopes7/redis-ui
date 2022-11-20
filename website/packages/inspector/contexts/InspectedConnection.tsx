import { Connection } from '@redis-ui/connections';
import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

type InspectedConnectionData = {
  connection?: Connection;

  inspectConnection: (connection: Connection) => void;
};

const InspectedConnectionContext = createContext<InspectedConnectionData | null>(null);

export function InspectedConnectionProvider({ children }: PropsWithChildren) {
  const [connection, setConnection] = useState<Connection>();

  return (
    <InspectedConnectionContext.Provider
      value={{
        connection,
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
