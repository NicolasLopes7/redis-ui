import React from 'react';
import { Outlet } from 'react-router-dom';
import { Background, Flex } from '@redis-ui/ui';
import { Header, ToolSelector } from '@redis-ui/inspector';

export function ConnectionLayout() {
  return (
    <Background>
      <Flex css={{ width: '100%' }}>
        <ToolSelector />
        <Flex direction={'column'} css={{ width: '100%' }}>
          <Header />
          <Outlet />
        </Flex>
      </Flex>
    </Background>
  );
}
