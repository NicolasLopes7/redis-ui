import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { useLocalStorageSync } from '../../../hooks/useLocalStorageSync';

export type SavedConnection = {
  name?: string;
  host: string;
  port: number;
  database: string;
  password?: string;
};

type SavedConnectionsData = {
  connections: SavedConnection[];
  hasSavedConnections: boolean;

  removeConnection: (connection: SavedConnection) => void;
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

  const removeConnection = useCallback((connectionToRemove: SavedConnection) => {
    setConnections((connections) => connections.filter((connection) => connection.name === connectionToRemove.name));
  }, []);

  const hasSavedConnections = connections.length > 0;

  return (
    <SavedConnectionsContext.Provider value={{ connections, saveConnection, removeConnection, hasSavedConnections }}>
      {children}
    </SavedConnectionsContext.Provider>
  );
}

export const useSavedConnections = () => {
  const context = useContext(SavedConnectionsContext);
  if (!context) throw new Error('useSavedConnections must be called within a SavedConnectionsProvider');

  return context;
};
