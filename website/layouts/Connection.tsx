import React, { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Background, Flex } from '@redis-ui/ui';
import { Header, Tool, ToolSelector } from '@redis-ui/inspector';

export function ConnectionLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const selectedTool = useMemo(() => {
    return pathname.split('/connection/')[1] as Tool;
  }, [pathname]);

  return (
    <Background>
      <Flex css={{ width: '100%' }}>
        <ToolSelector selectedTool={selectedTool} onToolSelect={(tool) => navigate(`./${tool}`)} />
        <Flex direction={'column'} css={{ width: '100%' }}>
          <Header />
          <Outlet />
        </Flex>
      </Flex>
    </Background>
  );
}
