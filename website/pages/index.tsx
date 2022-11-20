import React, { useCallback, useState } from 'react';
import { NewConnectionCard, useSavedConnections } from '@redis-ui/connections';
import { Background, Flex } from '@redis-ui/ui';
import { ConnectionSelector } from '@redis-ui/connections/components/ConnectionSelector';
import { SavedConnection } from '@redis-ui/connections/contexts/SavedConnections';
import { NewConnection } from '@redis-ui/connections/schemas';

export function InitialPage() {
  const [selectedConnection, setSelectedConnection] = useState<SavedConnection>();
  const { connections, saveConnection, removeConnection } = useSavedConnections();

  const handleConnect = useCallback(async (connection: NewConnection) => {
    try {
      const { host, password, port, database } = connection.data;

      const connectionURL = `redis://${password ? `:${password}@` : ''}${host}:${port}/${database}`;
      console.log({ connectionURL });

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
          padding: '$4',
          width: '100%',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <NewConnectionCard
          defaultValues={
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
