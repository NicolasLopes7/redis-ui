import React, { useCallback, useState } from 'react';

import {
  ConnectionSelector,
  SavedConnection,
  SetupConnection,
  useSavedConnections,
  Connection
} from '@redis-ui/connections';

import { Background, Flex } from '@redis-ui/ui';

export function InitialPage() {
  const [selectedConnection, setSelectedConnection] = useState<SavedConnection>();
  const { connections, saveConnection, removeConnection } = useSavedConnections();

  const handleConnect = useCallback(async (connection: Connection) => {
    try {
      const { host, password, port, database } = connection.data;

      const connectionURL = `redis://${password ? `:${password}@` : ''}${host}:${port}/${database}`;

      const response = await window.Main.connect(connectionURL);
      if (!response) {
        return;
      }

      if (connection.metadata.saveConnection) {
        saveConnection({
          host,
          password,
          name: connection.metadata.connectionName,
          port,
          database
        });
      }

      console.log('Able to connect!');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Background>
      <ConnectionSelector onSelect={setSelectedConnection} connections={connections} onRemove={removeConnection} />
      <Flex
        direction={'column'}
        css={{
          width: '100%',
          padding: '$4',
          flexGrow: 0,
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <SetupConnection
          selectedConnection={
            selectedConnection
              ? {
                  data: selectedConnection,
                  metadata: {
                    saveConnection: true,
                    connectionName: selectedConnection.name
                  }
                }
              : undefined
          }
          onSubmit={handleConnect}
        />
      </Flex>
    </Background>
  );
}
