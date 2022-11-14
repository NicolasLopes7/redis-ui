import { EyeOpenIcon, KeyboardIcon, BackpackIcon } from '@radix-ui/react-icons';
import { Flex } from '@redis-ui/ui';
import React from 'react';
import { useConnectionsProvider } from '../../contexts/ConnectionsProvider';
import { SidebarGroup, SidebarItem } from './styles';

export function ConnectionSidebar() {
  const { selectedConnection } = useConnectionsProvider();

  if (!selectedConnection) {
    return null;
  }

  return (
    <Flex
      direction="column"
      gap="lg"
      css={{
        background: '$bg50',
        width: '320px',
        minHeight: '100vh',
        padding: '32px 0px'
      }}
    >
      <SidebarGroup>
        <SidebarItem to="">
          <KeyboardIcon /> Keys
        </SidebarItem>

        <SidebarItem to="/pub-sub">
          <EyeOpenIcon /> Pub Sub
        </SidebarItem>

        <SidebarItem to="..">
          <BackpackIcon /> Leave
        </SidebarItem>
      </SidebarGroup>
    </Flex>
  );
}
