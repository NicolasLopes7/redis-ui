import { Flex } from '@redis-ui/ui';
import React from 'react';
import { SavedConnection } from '../../contexts/SavedConnections';
import { ConnectionItem } from './ConnectionItem/ConnectionItem';

type Props = {
  connections: SavedConnection[];
  selectedConnection?: SavedConnection;

  onSelect: (connection: SavedConnection) => void;
  onRemove: (connection: SavedConnection) => void;
};

export function ConnectionSelector({ connections, selectedConnection, onSelect, onRemove }: Props) {
  return (
    <Flex
      direction={'column'}
      gap={'md'}
      css={{
        width: '100%'
      }}
    >
      {connections.map((connection) => (
        <ConnectionItem
          key={connection.name}
          connection={connection}
          isSelected={selectedConnection?.name === connection.name}
          onSelect={() => onSelect(connection)}
          onRemove={() => onRemove(connection)}
        />
      ))}
    </Flex>
  );
}
