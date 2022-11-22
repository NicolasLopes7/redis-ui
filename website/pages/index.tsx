import React, { useCallback, useState } from 'react';

import { ConnectionSelector, SetupConnection, useSavedConnections, Connection } from '@redis-ui/connections';

import { Background, Flex, useToastProvider } from '@redis-ui/ui';
import { useInspectedConnection } from '@redis-ui/inspector';
import { useNavigate } from 'react-router-dom';

export function InitialPage() {
  const [selectedConnection, setSelectedConnection] = useState<Connection>();
  const { connections, saveConnection, removeConnection } = useSavedConnections();
  const navigate = useNavigate();
  const { inspectConnection } = useInspectedConnection();
  const { addToast } = useToastProvider();

  const handleConnect = useCallback(
    async (connection: Connection) => {
      const { remove: removeLoadingToast } = addToast({
        title: 'Connecting...',
        message: 'We are getting into you Redis instance...',
        type: 'info'
      });

      try {
        const { host, password, port, database } = connection.data;

        const connectionURL = `redis://${password ? `:${password}@` : ''}${host}:${port}/${database}`;

        const response = await window.Main.connect(connectionURL);
        if (!response) {
          removeLoadingToast();

          addToast({
            title: 'Unable to Connect',
            message: "Oops! We weren't able to connect into your Redis instance",
            type: 'error'
          });
          return;
        }

        if (connection.metadata.saveConnection) {
          saveConnection(connection);
        }

        removeLoadingToast();
        addToast({ title: 'Connected!', message: 'We connected into your Redis instance', type: 'success' });

        inspectConnection(connection);
        navigate('/keys');
      } catch (error) {
        removeLoadingToast();

        addToast({
          title: 'Unable to Connect',
          message: "Oops! We weren't able to connect into your Redis",
          type: 'error'
        });
        console.error(error);
      }
    },
    [addToast, inspectConnection, navigate, saveConnection]
  );

  return (
    <Background>
      <ConnectionSelector onSelect={setSelectedConnection} connections={connections} onRemove={removeConnection} />
      <Flex
        direction={'column'}
        css={{
          width: '100%',
          p: '$4',
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
