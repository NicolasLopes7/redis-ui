import { Flex, Button } from '@redis-ui/ui';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConnectionsProvider } from '../../contexts/ConnectionsProvider';
import { Connection } from './Connection';
import { SidebarGroup, SidebarTitle } from './styles';

export function Sidebar() {
  const navigate = useNavigate();

  const { connections, selectConnection } = useConnectionsProvider();

  const handleNewConnection = useCallback(() => {
    navigate('/');
    selectConnection(undefined);
  }, []);

  if (!connections.length) return null;

  return (
    <Flex
      direction="column"
      gap="lg"
      css={{
        background: '$bg50',
        width: '320px',
        minHeight: '100vh',
        padding: '32px 20px'
      }}
    >
      <Button onClick={handleNewConnection} size="sm">
        New Connection
      </Button>

      <SidebarGroup>
        <SidebarTitle>RECENT</SidebarTitle>
        {connections.map((connection) => (
          <Connection key={connection.id} connection={connection} />
        ))}
      </SidebarGroup>
    </Flex>
  );
}
