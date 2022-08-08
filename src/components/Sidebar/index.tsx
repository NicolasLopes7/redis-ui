import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '../base';
import { Connection } from './Connection';
import { SidebarGroup, SidebarTitle } from './styles';

export function Sidebar() {
  const navigate = useNavigate();

  const handleNewConnection = useCallback(() => {
    navigate('/');
  }, [navigate]);

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
        <Connection selected connection={{ url: 'redis: //aeee' }} />
      </SidebarGroup>
    </Box>
  );
}
