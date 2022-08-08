import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConnectionsProvider } from '../../contexts/ConnectionsProvider';
import { Box, Button } from '../base';
import { Connection } from './Connection';
import { SidebarGroup, SidebarTitle } from './styles';

export function Sidebar() {
  const navigate = useNavigate();

  const { connections, selectConnection } = useConnectionsProvider();

  const handleNewConnection = useCallback(() => {
    navigate('/');
    selectConnection(undefined);
  }, [navigate]);

  if (!connections.length) return null;

  return (
    <Box
      css={{
        background: '$bg50',
        width: '320px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
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
    </Box>
  );
}
