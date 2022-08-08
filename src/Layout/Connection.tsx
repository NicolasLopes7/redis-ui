import React from 'react';
import { Outlet } from 'react-router-dom';
import { Background, Box, Text } from '../components/base';
import { ConnectionSidebar } from '../components/ConnectionSidebar';
import { useConnectionsProvider } from '../contexts/ConnectionsProvider';

export function ConnectionLayout() {
  const { selectedConnection } = useConnectionsProvider();
  if (!selectedConnection) return null;

  return (
    <Background
      css={{
        display: 'flex'
      }}
    >
      <ConnectionSidebar />
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          gap: '24px'
        }}
      >
        <Text
          css={{
            fontSize: '$3xl'
          }}
        >
          {selectedConnection.url}
        </Text>
        <Outlet />
      </Box>
    </Background>
  );
}
