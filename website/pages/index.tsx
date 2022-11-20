import React, { useCallback, useState } from 'react';

import { ConnectionSelector, SetupConnection, useSavedConnections, Connection } from '@redis-ui/connections';

import { Background, Flex } from '@redis-ui/ui';

export function InitialPage() {
  const [selectedConnection, setSelectedConnection] = useState<Connection>();
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
        saveConnection(connection);
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
        <SetupConnection selectedConnection={selectedConnection} onSubmit={handleConnect} />
      </Flex>
    </Background>
  );
}
