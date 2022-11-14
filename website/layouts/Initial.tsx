import { Background, Box, Text } from '@redis-ui/ui';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function InitialLayout() {
  return (
    <Background>
      <Sidebar />
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          gap: '24px',
          maxWidth: '720px',
          padding: '24px',
          margin: '0 auto'
        }}
      >
        <Text
          css={{
            fontSize: '$3xl'
          }}
        >
          Redis UI
        </Text>
        <Outlet />
      </Box>
    </Background>
  );
}
