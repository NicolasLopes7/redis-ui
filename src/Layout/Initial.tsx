import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '../components/base';
import { Background } from '../components/base/Background';
import { Text } from '../components/base/Text';
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
          gap: '24px'
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
