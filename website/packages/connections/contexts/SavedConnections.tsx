import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { useLocalStorageSync } from '../../../hooks/useLocalStorageSync';
import { Connection } from '../schemas';

type SavedConnectionsData = {
  connections: Connection[];
  hasSavedConnections: boolean;

  removeConnection: (connection: Connection) => void;
  saveConnection: (connection: Connection) => void;
};

const ConnectionsContext = createContext<SavedConnectionsData | null>(null);

export function SavedConnectionsProvider({ children }: PropsWithChildren) {
  const [connections, setConnections] = useState<Connection[]>([]);

  useLocalStorageSync('SAVED_CONNECTIONS', connections, setConnections);

  const saveConnection = useCallback((newConnection: Connection) => {
    setConnections((connections) => {
      if (connections.find((connection) => connection.metadata.name === newConnection.metadata.name)) {
        return connections.map((connection) =>
          connection.metadata.name === newConnection.metadata.name ? newConnection : connection
        );
      }

      return [newConnection, ...connections];
    });
  }, []);

  const removeConnection = useCallback((connectionToRemove: Connection) => {
    setConnections((connections) =>
      connections.filter((connection) => connection.metadata.name !== connectionToRemove.metadata.name)
    );
  }, []);

  const hasSavedConnections = connections.length > 0;

  return (
    <ConnectionsContext.Provider value={{ connections, saveConnection, removeConnection, hasSavedConnections }}>
      {children}
    </ConnectionsContext.Provider>
  );
}

export const useSavedConnections = () => {
  const context = useContext(ConnectionsContext);
  if (!context) throw new Error('useConnections must be called within a SavedConnectionsProvider');

  return context;
};
