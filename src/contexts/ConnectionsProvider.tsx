import { createContext, PropsWithChildren, useEffect, useState } from 'react';

export type Connection = {
  url: string;
  name?: string;
  status: 'active' | 'inactive';
};

type ConnectionsProviderData = {
  connections: Connection[];
  selectedConnection?: Connection;
};

export const ConnectionsContext = createContext({} as ConnectionsProviderData);

export const ConnectionsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const storedConnections = localStorage.getItem('@redis-ui/connections');
    if (storedConnections) {
      setConnections(JSON.parse(storedConnections));
    }
  }, []);
};
