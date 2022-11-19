import { Text } from '@redis-ui/ui';
import React from 'react';
import { SavedConnection } from '../../../contexts/SavedConnections';
import { CloseAction, Container, ContentContainer } from './styles';

type Props = {
  connection: SavedConnection;
  isSelected: boolean;

  onSelect: () => void;
  onRemove: () => void;
};

export function ConnectionItem({ isSelected, connection, onSelect, onRemove }: Props) {
  return (
    <Container tabIndex={0} isSelected={isSelected} onClick={onSelect}>
      <CloseAction onClick={onRemove} />
      <ContentContainer>
        <Text
          css={{
            fontWeight: 'bold',
            color: '$white'
          }}
        >
          {connection.name}
        </Text>

        <Text css={{ color: '$text200' }}>
          {connection.host}:${connection.port}
        </Text>
      </ContentContainer>
    </Container>
  );
}
