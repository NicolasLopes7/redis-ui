import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';

export type Connection = {
  url: string;
  name?: string;
  status: 'active' | 'inactive';
};

type WithID<T> = T & { id: string };

export type SavedConnection = WithID<Connection>;

type ConnectionsProviderData = {
  connections: SavedConnection[];
  selectedConnection?: SavedConnection;
  selectConnection: (id?: string) => void;

  addConnection: (connection: Connection) => void;
  removeConnection: (id: string) => void;
};

export const ConnectionsContext = createContext({} as ConnectionsProviderData);

export function ConnectionsProvider({ children }: PropsWithChildren<{}>) {
  const [connections, setConnections] = useState<SavedConnection[]>([]);
  const [selectedConnection, setSelectedConnection] = useState<SavedConnection>();

  useEffect(() => {
    const storedConnections = localStorage.getItem('@redis-ui/connections');
    if (storedConnections) {
      setConnections(JSON.parse(storedConnections));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@redis-ui/connections', JSON.stringify(connections));
  }, [connections]);

  const addConnection = useCallback(
    (connection: Connection) => {
      const newConnection = {
        id: crypto.randomUUID(),
        ...connection
      };

      setConnections([...connections, newConnection]);
      setSelectedConnection(newConnection);
    },
    [connections]
  );

  const removeConnection = useCallback(
    (id: string) => {
      const newConnections = connections.filter((connection) => connection.id !== id);
      setConnections(newConnections);
    },
    [connections]
  );

  const selectConnection = useCallback(
    (id?: string) => {
      if (!id) {
        setSelectedConnection(undefined);

        return;
      }

      const connection = connections.find((c) => c.id === id);
      if (!connection) return;

      setSelectedConnection(connection);
    },
    [connections]
  );

  return (
    <ConnectionsContext.Provider
      value={{
        connections,
        selectedConnection,
        selectConnection,
        addConnection,
        removeConnection
      }}
    >
      {children}
    </ConnectionsContext.Provider>
  );
}

export const useConnectionsProvider = () => {
  return useContext(ConnectionsContext);
};
