import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '../components/base';
import { Background } from '../components/base/Background';
import { Text } from '../components/base/Text';

export function InitialLayout() {
  return (
    <Background>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
