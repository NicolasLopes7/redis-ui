import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from 'react';

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

  hasConnections: boolean;
};

export const ConnectionsContext = createContext({} as ConnectionsProviderData);

const areConnectionsEqual = (a: SavedConnection, b: SavedConnection) => a.url === b.url;

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

      const equalConnection = connections.find((c) => areConnectionsEqual(c, newConnection));
      if (equalConnection) {
        return;
      }

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

  const hasConnections = useMemo(() => {
    return connections.length > 0;
  }, [connections.length]);

  return (
    <ConnectionsContext.Provider
      value={{
        hasConnections,
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
