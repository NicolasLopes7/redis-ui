import { Flex, Stack } from '@redis-ui/ui';
import React from 'react';
import { Connection } from '../../schemas';
import { ConnectionItem } from './ConnectionItem/ConnectionItem';
import { NewConnectionButton } from './NewConnectionButton';

type Props = {
  connections: Connection[];
  selectedConnection?: Connection;

  onSelect: (connection?: Connection) => void;
  onRemove: (connection: Connection) => void;
};

export function ConnectionSelector({ connections, selectedConnection, onSelect, onRemove }: Props) {
  if (!connections.length) return null;

  return (
    <Stack
      direction="column"
      spacing="lg"
      css={{
        background: '$gray100',
        minWidth: '360px',
        minHeight: '100vh',
        p: '32px 20px'
      }}
    >
      <Stack direction={'column'} align="center" spacing={'md'} width="full">
        {connections.map((connection) => (
          <ConnectionItem
            key={connection.metadata.name}
            connection={connection}
            isSelected={selectedConnection?.metadata?.name === connection.metadata.name}
            onSelect={() => onSelect(connection)}
            onRemove={() => onRemove(connection)}
          />
        ))}

        <NewConnectionButton onClick={() => onSelect()} />
      </Stack>
    </Stack>
  );
}
