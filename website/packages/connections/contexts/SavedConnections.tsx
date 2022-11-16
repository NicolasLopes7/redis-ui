import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { useLocalStorageSync } from '../../../hooks/useLocalStorageSync';

type SavedConnection = {
  name?: string;
  host: string;
  port: number;
  database?: string;
  password?: string;
};

type SavedConnectionsData = {
  connections: SavedConnection[];

  saveConnection: (connection: SavedConnection) => void;
};

const SavedConnectionsContext = createContext<SavedConnectionsData | null>(null);

export function SavedConnectionsProvider({ children }: PropsWithChildren) {
  const [connections, setConnections] = useState<SavedConnection[]>([]);

  useLocalStorageSync('SAVED_CONNECTIONS', connections, setConnections);

  const saveConnection = useCallback((newConnection: SavedConnection) => {
    setConnections((connections) => {
      if (connections.find((connection) => connection.name === newConnection.name)) {
        return connections.map((connection) => (connection.name === newConnection.name ? newConnection : connection));
      }

      return [newConnection, ...connections];
    });
  }, []);

  return (
    <SavedConnectionsContext.Provider value={{ connections, saveConnection }}>
      {children}
    </SavedConnectionsContext.Provider>
  );
}

export const useSavedConnections = () => {
  const context = useContext(SavedConnectionsContext);
  if (!context) throw new Error('useSavedConnections must be called within a SavedConnectionsProvider');

  return context;
};
