import { useSavedConnections } from '@redis-ui/connections';
import { ConnectionSelector } from '@redis-ui/connections/components/ConnectionSelector';
import { SavedConnection } from '@redis-ui/connections/contexts/SavedConnections';
import { Flex } from '@redis-ui/ui';
import React, { useCallback, useState } from 'react';

export function Sidebar() {
  const { connections } = useSavedConnections();
  const [selectedConnection, setSelectedConnection] = useState<SavedConnection>();

  if (!connections.length) return null;

  return (
    <Flex
      direction="column"
      gap="lg"
      css={{
        background: '$bg50',
        width: '360px',
        minHeight: '100vh',
        padding: '32px 20px'
      }}
    >
      <ConnectionSelector
        connections={connections}
        onSelect={setSelectedConnection}
        selectedConnection={selectedConnection}
      />
    </Flex>
  );
}
