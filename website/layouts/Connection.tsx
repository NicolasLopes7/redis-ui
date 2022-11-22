import React from 'react';
import { Outlet } from 'react-router-dom';
import { Background, Flex } from '@redis-ui/ui';
import { Header, useInspectedConnection } from '@redis-ui/inspector';

export function ConnectionLayout() {
  return (
    <Background>
      <Flex direction={'column'} css={{ width: '100%' }}>
        <Header />
        <Outlet />
      </Flex>
    </Background>
  );
}
