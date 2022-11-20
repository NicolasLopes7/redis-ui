import { Text } from '@redis-ui/ui';
import React from 'react';
import { Connection } from '../../../schemas';
import { CloseAction, Container, ContentContainer } from './styles';

type Props = {
  connection: Connection;
  isSelected: boolean;

  onSelect: () => void;
  onRemove: () => void;
};

export function ConnectionItem({ isSelected, connection, onSelect, onRemove }: Props) {
  return (
    <Container as="button" tabIndex={0} isSelected={isSelected} onClick={onSelect}>
      <CloseAction onClick={onRemove} />
      <ContentContainer>
        <Text
          css={{
            fontWeight: 'bold',
            color: '$white'
          }}
        >
          {connection.metadata.connectionName}
        </Text>

        <Text css={{ color: '$text200' }}>
          {connection.data.host}:{connection.data.port}
        </Text>
      </ContentContainer>
    </Container>
  );
}
